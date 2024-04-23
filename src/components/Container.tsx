import React from 'react';
import './container.css'
import Header from './Header'; 
import Button from './Button';
const Container = ()=>{

    return (
        <div className='container_main'>
            <div className='container' >
                 <Header title="Alfredo Manuel" subTitle="Software Engineer"/>
                <div className='content'> I'm a Back-end programmer with a focus on Typescript(Node.js) and C++. With 3 years of experience, I have knowledge in DevOps.
                </div>
                <Button value="Let's go to start "/>
            </div>
        </div>
    );

}

export default Container;