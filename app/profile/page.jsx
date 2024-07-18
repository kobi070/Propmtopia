"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import ProfileComponent from "@components/Profile";

const Profile = () => {
    const { data: session } = useSession();
    const router = useRouter();

    const [posts, setPosts] = useState([]);

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`);
    };
    
    const handleDelete = async (post) => {
        const hasConfirmed = confirm(`Are you sure you want to delete this prompt?`);
        if (hasConfirmed) {
            try {
                await fetch(`/api/prompt/${post._id.toString()}`, {
                    method: 'DELETE',
                });
                const filteredPost = posts.filter((p) => p._id !== post._id);
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`api/users/${session?.user.id}/posts`);
            const data = await response.json();

            if (session?.user.id) {
                setPosts(data);
            };
        };
        fetchPost();
    }, []);
    return (
        <ProfileComponent
            name="My"
            desc="Welcome to your personal profile page"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default Profile