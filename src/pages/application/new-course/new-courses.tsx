import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CourseNew } from "modules/courses/api";

import Footer from "components/footer";

import Statistic from "../home/components/statistic";
import Steps from "../home/components/steps";

import "../home/style/new-courses.scss";

export interface Results {
   id: number;
   name: string;
   price: number;
   view: number;
   image: string;
   review_count: number;
}

export interface NewCourses {
   count: number;
   next: null;
   previous: null;
   results: Results[];
}

function NewCoursess() {
   const [pricing, setPricing] = useState<NewCourses[]>();

   const navigete = useNavigate();

   useEffect(() => {
      const fetch = async () => {
         const { data }: any = await CourseNew();

         setPricing(data.results);
      };

      fetch();
   }, []);

   // if (!pricing) return null;
   return (
      <>
         <section className="top-course" data-aos="zoom-in-up" data-aos-duration="1500">
            <div className="title">
               <h1>
                  <span>Yangi</span> kurslar
               </h1>
            </div>
            <div className="boxes">
               {/* @ts-ignore */}
               {pricing?.map(item => (
                  // @ts-ignore
                  <div className="box" key={item.id}>
                     {/* @ts-ignore */}
                     <img src={item.image} alt="banner" />
                     <div className="text">
                        <div className="flex">
                           {/* @ts-ignore */}
                           <h3>{item.name}</h3>
                           <i className="fa-regular fa-bookmark" />
                        </div>
                        <div className="statistic">
                           <div className="star">
                              <i className="fa-solid fa-star" />
                              <h2>4,2</h2>
                           </div>
                           <div className="view">
                              <i className="fa-solid fa-eye" />
                              {/* @ts-ignore */}
                              <h2>{item.view}</h2>
                           </div>
                        </div>
                        <div className="price">
                           <h3>
                              {/* @ts-ignore */}
                              {item.price}
                              <span>/so'm</span>
                           </h3>
                           <h2>Xarid qilish</h2>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </section>
         <Statistic />
         <Steps />
         <Footer />
      </>
   );
}

export default NewCoursess;
