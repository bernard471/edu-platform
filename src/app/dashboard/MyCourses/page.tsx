"use client"

import Sidebar from "@/components/DashboardSidebar";
import Header from "@/components/DashboardHeader";
import { useEffect, useState, useCallback } from 'react';
import { courses } from "@/data/mycourses";
import { useRouter } from "next/navigation";
import CourseCard from "@/components/courseComponents/CourseCard";
import RecommendedCourseCard from "@/components/RecommendedCourseCard";
import { recommendedCourses } from "@/data/recommendedCourses";
import { useToast } from "@/hooks/use-toast";

export default function Courses() {
    const router = useRouter();
    const { toast } = useToast();
    const [notifications] = useState(3);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [purchasedCourses, setPurchasedCourses] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPurchasedCourses = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/users/course-purchase');
            const data = await response.json();
            
            if (data.success) {
                const purchasedIds = data.courseDetails.map((course: { courseId: string }) => course.courseId);
                setPurchasedCourses(purchasedIds);
            }
        } catch {
            toast({
                title: "Error",
                description: "Failed to fetch your courses. Please try again.",
                variant: "destructive"
            });
        } finally {
            setIsLoading(false);
        }
    }, [toast]);

    useEffect(() => {
        fetchPurchasedCourses();
    }, [fetchPurchasedCourses]);

    const categories = ["All", ...new Set(courses.map(course => course.category))];

    const userPurchasedCourses = courses.filter(course => {
        return purchasedCourses.includes(course.id) &&
               (searchTerm === "" || course.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
               (selectedCategory === "All" || course.category === selectedCategory);
    });

    const handleCourseClick = (courseId: string) => {
        switch(courseId) {
            case "cyber-fundamentals":
                router.push(`/dashboard/CourseStudy?category=${courseId}`);
                break;
            case "cyber-fundamentals-beginner":
                router.push(`/dashboard/CourseStudy1?category=${courseId}`);
                break;
            case "kali-linux-basics":
                router.push(`/dashboard/CourseStudy2?category=${courseId}`);
                break;
            // Add more cases for each course
            default:
                router.push(`/dashboard/CourseStudy?category=${courseId}`);
        }
    };

    const handleRecommendedCourseClick = (courseId: string) => {
        router.push(`/coursecheckout/${courseId}`);
    };
    

    return (
        <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
        <Header notifications={notifications} />
  
          <main className="p-6">
                    {/* Search and Filter Section */}
                    <section className="mb-8">
                        <div className="flex flex-col md:flex-row gap-4 justify-between bg-white p-4 rounded-lg shadow">
                            <input
                                type="text"
                                placeholder="Search your courses..."
                                className="p-2 border rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <select
                                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </section>

                    {/* My Courses Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">My Courses</h2>
                        {isLoading ? (
                            <div className="text-center py-8">Loading your courses...</div>
                        ) : userPurchasedCourses.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {userPurchasedCourses.map((course) => (
                                    <CourseCard
                                        key={course.id}
                                        {...course}
                                        isPurchased={true}
                                        onClick={handleCourseClick}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8 bg-white rounded-lg shadow">
                                <p className="text-gray-600">You haven&apos;t purchased any courses yet.</p>
                            </div>
                        )}
                    </section>

                    {/* Recommended Courses Section */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6">Recommended Courses</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {recommendedCourses.map((course) => (
                                <RecommendedCourseCard
                                    key={course.id}
                                    {...course}
                                    onClick={handleRecommendedCourseClick}
                                />
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
