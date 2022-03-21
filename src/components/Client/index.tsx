import type { NextPage } from 'next'
import Image from 'next/image';
const child = '/icons/child.png';

const Client: NextPage = () => {
    return (
        <div className='client container'>
            <div className='client-visitor'>
                <div>
                    <h1>15K</h1>
                    <h5>Happy Customers</h5>
                </div>

                <div>
                    <h1>15K</h1>
                    <h5>Monthly Visitors</h5>
                </div>

                <div>
                    <h1>15K</h1>
                    <h5>Countries  Worldwide</h5>
                </div>

                <div>
                    <h1>15K</h1>
                    <h5>Top Partners</h5>
                </div>
            </div>

            <div className='client-description'>
                <div>
                    <div className='red-line2'/>
                    <h1>Every Client Matters</h1>
                    <h5>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </h5>
                    <h6>Learn More</h6>
                </div>
                <Image
                    width={500}
                    height={500}
                    objectFit="contain"
                    src={child}
                    alt=""
                />
            </div>
        </div>
    )
}

export default Client;
