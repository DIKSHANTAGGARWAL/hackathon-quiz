import React from "react";

const Sports = () => {

    return (
        <div className="category">

            <h1>Categories</h1>
            <hr />
            <h2>Choose your category</h2>
            <center>

                < a href="/math"><button class="btn">
                    <img className="img"
                        src="https://img.freepik.com/premium-vector/maths-doodle-line-set-school-university-outline-subject_399998-71.jpg?w=2000"
                    />
                    <h2>Mathematics</h2>
                </button>
                </a>

                <a href="/sports">
                    <button class="btn">
                        <img className="img"
                            src="https://t3.ftcdn.net/jpg/02/78/42/76/360_F_278427683_zeS9ihPAO61QhHqdU1fOaPk2UClfgPcW.jpg"
                        />
                        <h2>Sports</h2>
                    </button>
                </a>

                <a href="/computers">
                    <button class="btn">
                        <img className="img"
                            src="https://images.squarespace-cdn.com/content/v1/5fce63270356d927d7eecdbd/033e9988-2ac8-4cb9-8b9f-5bf05fb22dcb/gff.jpg"
                        />
                        <h2>Computers</h2>
                    </button>
                </a>

                <br />

                <a href="/art">
                    <button class="btn">
                        <img className="img"
                            src="https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg"
                        />
                        <h2>Art</h2>
                    </button>
                </a>

                <a href="/vehicles">
                    <button class="btn">
                        <img className="img"
                            src="https://www.cnet.com/a/img/resize/862eaaa847a0696e00837d55d55a8e46f268a6db/hub/2020/12/15/26e4c6dd-bd5e-4036-8bd0-69bcc05075ea/lamborghini-sc20-supercar-136.jpg?auto=webp&width=1200"
                        />
                        <h2>Vehicles</h2>
                    </button>
                </a>

                <a href="/mythology">
                    <button class="btn">
                        <img className="img" src="https://akm-img-a-in.tosshub.com/sites/media2/indiatoday/images/stories/2017August/gan3-mos_082217055054.jpg" />
                        <h2>Mythology</h2>
                    </button>
                </a>

            </center>
        </div>
    )

}

export default Sports