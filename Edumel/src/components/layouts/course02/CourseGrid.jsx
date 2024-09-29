import React, { Component } from 'react';
import CourseType from '../course02/CourseType';
import CourseData from '../../../data/course/CourseData.json';

class CourseGrid extends Component {

    render() {
        const CourseItems = CourseData.slice(0, 8);

        return (
            <section className="section-padding page" >
                <div className="course-top-wrap mb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <p>Showing 1-6 of 8 results</p>
                            </div>
            
                            <div className="col-lg-4">
                                <div className="topbar-search">
                                    <form method="get" action="#">
                                        <input type="text"  placeholder="Search our courses" className="form-control"/>
                                        <label><i className="fa fa-search"></i></label>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="container">
                    <div className="row ">
                    {
                        CourseItems.map((item) => (
                           
                            <div className="col-xl-4 col-lg-6 col-md-6" key={ item.id }>
                                <CourseType data={item} />
                            </div>
                        ) )
                    }
                        
                    </div>
                </div>
            </section>

        );
    }
}

export default CourseGrid;