import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>TechStar</h1>
        <p>Solutin to all your problems!</p>
      </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>
                We are your one and only Solution to the tech problems you face everyday. We are leading tech company whose aim is to increase the problem solving ability in children.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, enim aperiam, a excepturi quis quibusdam doloremque non, aliquam perspiciatis eum libero explicabo quae quod repellat perferendis error reprehenderit iure voluptate laudantium sint ab. Atque incidunt, nobis illum cupiditate accusamus enim, at sint ab placeat quis blanditiis quia eum facilis consequatur? Delectus reprehenderit amet voluptas molestiae, consequatur tenetur quasi quisquam at non ipsa quam in accusantium beatae facere quos id eos necessitatibus unde rerum deleniti? Praesentium vero pariatur, totam blanditiis ea repellat nisi tempora veritatis possimus dolore perspiciatis? Soluta, obcaecati accusamus quia aperiam cumque, delectus, nesciunt repellat natus voluptas enim excepturi.
            </p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                }}>
                 <AiFillGoogleCircle />
                 <p>Google</p>
                </div>

                <div style={{
                }}>
                 <AiFillAmazonCircle />
                 <p>Amazon</p>
                </div>

                <div style={{
                }}>
                 <AiFillYoutube />
                 <p>Youtube</p>
                </div>

                <div style={{
                }}>
                 <AiFillInstagram />
                 <p>Instagram</p>
                </div>
            </article>

        </div>
    </div>
    </>
  )
}

export default Home
