// Home.jsx
import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';

const Home = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await axios.get('course/published-courses');
                console.log(res.data)
                setCourses(res.data.courses);
            } catch (error) {
                console.error('Error fetching courses:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    if (loading) return <p className="text-center mt-10">Loading courses...</p>;

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">Available Courses</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <div key={course._id} className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between">
                        <img
                            src={course.courseThumbnail || "/placeholder.jpg"}
                            alt={course.courseTitle}
                            className="w-full h-40 object-cover rounded-lg mb-3"
                        />
                        <div>
                            <h2 className="text-xl font-semibold mb-1">{course.courseTitle}</h2>
                            <p className="text-gray-600 text-sm mb-1">{course.subTitle}</p>
                            <p className="text-gray-800 text-sm mb-2 line-clamp-3">{course.description}</p>
                            <p className="text-sm text-gray-500">Level: {course.courseLevel}</p>
                            <p className="text-sm text-gray-500">Category: {course.category}</p>
                            <p className="text-md font-bold mt-2">₹{course.coursePrice || 0}</p>
                        </div>
                        <button
                            onClick={() => handlePurchase(course._id)}
                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Purchase
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Example purchase handler (to be expanded with payment logic)
const handlePurchase = async (courseId) => {
    console.log(`Purchased course with ID: ${courseId}`);
    // Redirect to payment page or call purchase API
    try {
        const { data } = await axios.post('course/purchase', {
            'amount': 500,
            'currency': "INR",
            'receipt': "order_rcptid_11"
        })
        console.log(data)
        const order = data
        var options = {
            key: "rzp_test_SQ7HHXfY5ckqAa", // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: order.currency,
            name: "ForLearner", //your business name
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: async function (response) {
                const body = {
                    ...response,
                };

                const {data} = await axios.post("purchase/validate",body);
                // const jsonRes = await validateRes.json();
                console.log(data);
            },
            prefill: {
                //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                name: "Web Dev", //your customer's name
                email: "webdev@example.com",
                contact: "9000000000", //Provide the customer's phone number for better conversion rates
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on("payment.failed", function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });
        rzp1.open();
        e.preventDefault();
    } catch (error) {
        console.log(error)
    }
};

export default Home;