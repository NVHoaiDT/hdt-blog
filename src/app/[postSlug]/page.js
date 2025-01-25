import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import { loadBlogPost } from "@/helpers/file-helpers";
import { BLOG_TITLE } from "@/constants";
import COMPONENT_MAP from "@/helpers/mdx-component";

import BlogHero from "@/components/BlogHero";

import styles from "./postSlug.module.css";

export async function generateMetadata({ params }) {
  const blogPost = await loadBlogPost(params.postSlug);

  if (!blogPost) {
    return null;
  }

  const { frontmatter } = blogPost;
  return {
    title: `${frontmatter.title}-${BLOG_TITLE}`,
    description: frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const blogPost = await loadBlogPost(params.postSlug);

  if (!blogPost) {
    notFound();
    return null;
  }

  const { frontmatter, content } = blogPost;
  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content} components={COMPONENT_MAP} />
      </div>
    </article>
  );
}

export default BlogPost;
