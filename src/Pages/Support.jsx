import React from 'react';

const Support = () => {
    return (
        <div className='max-w-5xl mx-auto my-12'>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border-red-800 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">How do I register on the movie portal?</div>
                    <div className="collapse-content">
                        <p>To register, go to our Sign Up page and provide your name, email, password, and profile picture. Once you complete the registration, you can enjoy various features based on your movie preferences.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-red-800 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">How can I rate a movie?</div>
                    <div className="collapse-content">
                        <p>You can rate any movie by visiting its detail page and using the 1-5 star rating system. To rate a movie, you need to be logged in to your account.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-red-800 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Question: How do I add a movie to my watchlist?</div>
                    <div className="collapse-content">
                        <p>Go to the movie's detail page and click the "Add to Watchlist" button. The movie will be added to your watchlist.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-red-800 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Question: How can I leave a review for a movie?</div>
                    <div className="collapse-content">
                        <p>On each movie's detail page, go to the review section, write your thoughts, and click the "Submit" button. Once submitted, your review will be posted on the portal.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-red-800 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Does the portal offer any subscription plans?</div>
                    <div className="collapse-content">
                        <p>Yes, we offer different subscription plans such as Basic, Standard, and Premium. These plans provide exclusive content and high-quality streaming services.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-red-800 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">How do I log in to the portal?</div>
                    <div className="collapse-content">
                        <p>Go to the login page and enter your email and password to log in. Alternatively, you can log in easily using your Google or Facebook account.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-red-800 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">How can I filter movies by category?</div>
                    <div className="collapse-content">
                        <p>On the homepage or movie list page, you can filter movies by categories, ratings, year, language, etc. This allows you to find movies based on your preferences.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-red-800 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">How will I know about new movie releases?</div>
                    <div className="collapse-content">
                        <p>To discover new releases, visit our New Releases section or check the trending and upcoming movies on the homepage. You can also subscribe to receive notifications for new releases.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;