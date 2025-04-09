import React from "react";

const AboutPage = () => {
    return(
        <section className="mt-[10rem] flex items-center">
            <img src='/images/Buns&Burgers.webp' className="ml-4 w-[30rem] h-[20rem] rounded-md" alt="Buns and Burgers" />
            <div id="aboutUs" className="text-lg justify-center items-center text-center text-[#a71515] ml-[10rem] mr-[10rem]">
                Welcome to Buns and Burgers: Where Every Bite is a Delight! 
                <br />
                At Buns and Burgers, we believe that a great burger starts with the freshest ingredients and a passion for perfection. 
                Our buns are baked fresh daily, and our burgers are crafted with care, using only the highest quality meats and vegetables. 
                Whether you're in the mood for a classic cheeseburger or something a little more adventurous, we've got something to satisfy every craving.    
            </div>
        </section>
    )
}

export default AboutPage;