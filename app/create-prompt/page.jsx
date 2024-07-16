'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const CreatePrompt = () => {
  const [submiting, setSubmiting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e) => {
    e.preventDefault(); // prevent default webbrowser behavior
    setSubmiting(true);

    try {
      const response = await fetch('/api/prompt/new', {
        options: {
          method: 'POST',
          body: JSON.stringify({
            prompt: post.prompt,
            userId: session?.user.id,
            tag: post.tag,
          })
        },
      });

      if (response.ok) {
        router.push('/');
      };
    } catch (error) {
      console.log(error);
    } finally {
      setSubmiting(false);
    }

  };

  return (
    <Form
      type="create"
      post={post}
      setPost={setPost}
      submiting={submiting}
      handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt