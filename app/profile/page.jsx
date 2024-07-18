"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import ProfileComponent from "@components/Profile";

const Profile = () => {
    const { data: session } = useSession();

    const [posts, setPosts] = useState([]);
    const handleEdit = () => {
        
    };
    const handleDelete = async () => {

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