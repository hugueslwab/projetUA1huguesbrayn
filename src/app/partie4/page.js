import Card from "@/components/card/Card";
import React from "react";

const page = async () => {
  const getdata = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("erreur lors du fechting data");
    }
    return res.json();
  };

  const postsData = await getdata();
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {postsData &&
        postsData.map((post) => (
          <Card
            id={post.id}
            key={post.id}
            titre={post.titre}
            description={post.body}
          />
        ))}
    </div>
  );
};

export default page;
