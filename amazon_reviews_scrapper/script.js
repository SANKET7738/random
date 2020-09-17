const cheerio = require('cheerio');
const got = require('got');

const url = 'https://www.amazon.in/Apple-iPhone-11-64GB-Black/dp/B07XVMDRZY/ref=sr_1_1?dchild=1&keywords=iphone&qid=1600354773&s=electronics&sr=1-1';

got(url).then(response => {
    const $ = cheerio.load(response.body);
    // Load the reviews
    const reviews = $('.review');
    reviews.each((i, review) => {
        // Find the text children
        const textReview = $(review).find('.review-text').text();
        console.log(textReview);
    })
})