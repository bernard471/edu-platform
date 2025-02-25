import nodemailer from "nodemailer"
import User from "@/models/userModel"
import bcryptjs from "bcryptjs"
import { mailConfig } from "@/config/mail.config"

const transport = nodemailer.createTransport(mailConfig)

export const sendEmail = async ({ email, emailType, userId }: { email: string; emailType: string; userId: string }) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10)

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000
      })

      const mailResponse = await transport.sendMail({
        from: process.env.VERIFICATION_MAIL,
        to: email,
        subject: 'Verify your email',
        html: `<p>Click the link below to verify your email:</p> 
        <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}"
        style="display: inline-block; padding: 10px 20px; 
                      background-color: #2DD4BF; color: white; 
                      text-decoration: none; border-radius: 4px;">
              Verify Email
            </a>
            <p>This link expires in 1 hour</p>`
      })
      console.log('Verification mail sent successfully', mailResponse)
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000
      })

      const mailResponse = await transport.sendMail({
        from: process.env.VERIFICATION_MAIL,
        to: email,
        subject: 'Reset Your Password',
        html: `
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2>Reset Your Password</h2>
            <p>Click the link below to reset your password:</p>
            <a href="${process.env.DOMAIN}/reset-password?token=${hashedToken}" 
               style="display: inline-block; padding: 10px 20px; 
                      background-color: #2DD4BF; color: white; 
                      text-decoration: none; border-radius: 4px;">
              Reset Password
            </a>
            <p>This link expires in 1 hour</p>
            <p>If you didn't request this password reset, please ignore this email.</p>
          </div>
        `
      })
      console.log('Reset password mail sent successfully', mailResponse)
    }

    return hashedToken

  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
    throw new Error('An unknown error occurred')
  }
}
