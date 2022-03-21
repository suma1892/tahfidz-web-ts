import type { NextPage } from 'next'
import Image from 'next/image';
const stars = '/icons/star.png';
const reviewer = '/icons/teacher.jpg';

const Review: NextPage = () => {
    return (
        <div className='review container'>
            <h5>Practice Advice</h5>
            <h1>Every Client Matters</h1>
            <h4>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </h4>

            <div className='review-star'>
                {[...Array(3)].map((_, i) => (
                    <div key={i.toString()} className='review-star-content'>
                        <Image
                            width={150}
                            height={30}
                            objectFit="contain"
                            src={stars}
                            alt="stars"
                        />
                        <p className='review-star-content-desc'>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                        <div className='review-star-content-reviewer'>
                            <Image
                                width={50}
                                height={50}
                                objectFit="contain"
                                src={reviewer}
                                alt="stars"
                                className='review-star-content-reviewer-img'
                            />
                            <div className='review-star-content-reviewer-text'>
                                <p className='review-star-content-reviewer-text-name'>Ajeng</p>
                                <p className='review-star-content-reviewer-text-desc'>bumil</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Review;