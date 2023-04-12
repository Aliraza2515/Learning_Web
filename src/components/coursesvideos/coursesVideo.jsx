import React, { useState } from "react";
import "./coursesvideo.css";
// import Coursesvideo from '../coursesvideos/Coursesvideo.json'
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ReactPlayer from "react-player";

const Coursesvideo = [
    {
      "name": "Lecture 1",
      "title": "Social Media Management Services",
      "url": "https://www.youtube.com/watch/y_YWKMMRuIg",
      "videotitle": "Learn Social Media Management Services ( Lecture 1 )",
      "description": "In this tutorial, you will learn how to create a modern and responsive user interface for a social media website. We will use HTML, CSS, and JavaScript to build a website that is optimized for different screen sizes and devices. You will learn how to create a clean and elegant design with modern typography and color schemes, and implement features such as user authentication, navigation menus, and interactive components. By the end of this tutorial, you will have a solid understanding of responsive web design principles and be able to apply them to your own projects."
    },
    {
      "name": "Lecture 2",
      "title": "Social Media Management Services",
      "url": "https://www.youtube.com/watch/fDc_YsVc-Zs",
      "videotitle": "Learn Social Media Management Services ( Lecture 2 )",
      "description": "In this tutorial, you will learn how to create a modern and responsive user interface for a social media website. We will use HTML, CSS, and JavaScript to build a website that is optimized for different screen sizes and devices. You will learn how to create a clean and elegant design with modern typography and color schemes, and implement features such as user authentication, navigation menus, and interactive components. By the end of this tutorial, you will have a solid understanding of responsive web design principles and be able to apply them to your own projects."
    },
    {
      "name": "Lecture 3",
      "title": "Social Media Management Services",
      "url": "https://www.youtube.com/watch/D4WC-V6EcrM",
      "videotitle": "Learn Social Media Management Services ( Lecture 3 )",
      "description": "In this tutorial, you will learn how to create a modern and responsive user interface for a social media website. We will use HTML, CSS, and JavaScript to build a website that is optimized for different screen sizes and devices. You will learn how to create a clean and elegant design with modern typography and color schemes, and implement features such as user authentication, navigation menus, and interactive components. By the end of this tutorial, you will have a solid understanding of responsive web design principles and be able to apply them to your own projects."
    },
    {
      "name": "Lecture 4",
      "title": "Social Media Management Services",
      "url": "https://www.youtube.com/watch/FRMlN-WeTsw",
      "videotitle": "Learn Social Media Management Services ( Lecture 4 )",
      "description": "In this tutorial, you will learn how to create a modern and responsive user interface for a social media website. We will use HTML, CSS, and JavaScript to build a website that is optimized for different screen sizes and devices. You will learn how to create a clean and elegant design with modern typography and color schemes, and implement features such as user authentication, navigation menus, and interactive components. By the end of this tutorial, you will have a solid understanding of responsive web design principles and be able to apply them to your own projects."
    },
    {
      "name": "Lecture 5",
      "title": "Social Media Management Services",
      "url": "https://www.youtube.com/watch/-IYhGiL3N1E",
      "videotitle": "Learn Social Media Management Services ( Lecture 5 )",
      "description": "In this tutorial, you will learn how to create a modern and responsive user interface for a social media website. We will use HTML, CSS, and JavaScript to build a website that is optimized for different screen sizes and devices. You will learn how to create a clean and elegant design with modern typography and color schemes, and implement features such as user authentication, navigation menus, and interactive components. By the end of this tutorial, you will have a solid understanding of responsive web design principles and be able to apply them to your own projects."
    },
    {
      "name": "Lecture 6",
      "title": "Social Media Management Services",
      "url": "https://www.youtube.com/watch/lR54qVoZdr8",
      "videotitle": "Learn Social Media Management Services ( Lecture 6 )",
      "description": "In this tutorial, you will learn how to create a modern and responsive user interface for a social media website. We will use HTML, CSS, and JavaScript to build a website that is optimized for different screen sizes and devices. You will learn how to create a clean and elegant design with modern typography and color schemes, and implement features such as user authentication, navigation menus, and interactive components. By the end of this tutorial, you will have a solid understanding of responsive web design principles and be able to apply them to your own projects."
    },
    {
      "name": "Lecture 7",
      "title": "Social Media Management Services",
      "url": "https://www.youtube.com/watch/0o4082l0LFQ",
      "videotitle": "Learn Social Media Management Services ( Lecture 7 )",
      "description": "In this tutorial, you will learn how to create a modern and responsive user interface for a social media website. We will use HTML, CSS, and JavaScript to build a website that is optimized for different screen sizes and devices. You will learn how to create a clean and elegant design with modern typography and color schemes, and implement features such as user authentication, navigation menus, and interactive components. By the end of this tutorial, you will have a solid understanding of responsive web design principles and be able to apply them to your own projects."
    }
  ]

const CourseScreen = () => {
    const [selected, setSelected] = useState(null);
    const [url, setUrl] = useState(true);
    const [videotitle, setVideotitle] = useState(null);
    const [description, setDescription] = useState(null);
  
    const setValue = (index, url, videotitle, description) => {
      setSelected(index);
      setUrl(url);
      setVideotitle(videotitle);
      setDescription(description);
    };
  
    return (
      <>
        <Navbar />
        <section className="corscreen">
          <div className="corscreen__container">
            <div className="left__corscreen">
              {url && <ReactPlayer url={url} loop={true} controls={true} />}
  
              <div className="left__videodetails">
                {videotitle && <h4>{videotitle}</h4>}
                {description && <p>{description}</p>}
              </div>
            </div>
            <div className="right__corscreen">
              <div className="corscreen__classes">
                {Coursesvideo.map((course, index) => (
                  <div
                    key={index}
                    className="corscreen__class"
                    onClick={() =>
                      setValue(
                        index,
                        course.url,
                        course.videotitle,
                        course.description
                      )
                    }
                    style={{
                      backgroundColor:
                        selected === index ? "" : "var(--color-bg2)",
                      borderColor:
                        selected === index ? "var(--color-primary)" : "",
                    }}
                  >
                    <h4>{course.name}</h4>
                    <p>{course.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  };

export default CourseScreen;
















