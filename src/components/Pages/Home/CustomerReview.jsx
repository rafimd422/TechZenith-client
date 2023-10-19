import React from 'react'

const CustomerReview = () => {

    const customerReviews = [
        {
          id: 1,
          name: "John Doe",
          review: "Absolutely love this product! It has made my life so much easier. The technology is top-notch, and the support from the team is outstanding. I can't imagine my daily routine without it.",
          timestamp: "3 days ago",
          image: "https://i.ibb.co/GxCyBgs/daniel-lincoln-NR705be-N-CU-unsplash.jpg"
        },
        {
          id: 2,
          name: "Jane Smith",
          review: "I was skeptical at first, but this product exceeded my expectations. The features are fantastic, and it's incredibly user-friendly. It's a must-have for tech enthusiasts.",
          timestamp: "2 days ago",
          image: "https://i.ibb.co/fx7MpB5/sergio-de-paula-c-Gmwf-HBDzk-unsplash.jpg"
        },
        {
          id: 3,
          name: "Michael Johnson",
          review: "This technology product has revolutionized the way I work. The speed and efficiency it offers are unmatched. It's like having a personal assistant, and I couldn't be happier.",
          timestamp: "4 days ago",
          image: "https://i.ibb.co/fx7MpB5/sergio-de-paula-c-Gmwf-HBDzk-unsplash.jpg"
        },
        {
          id: 4,
          name: "Sarah Williams",
          review: "As someone who loves staying updated with the latest tech, this product is a game-changer. The design is sleek, and the performance is exceptional. I highly recommend it.",
          timestamp: "5 days ago",
          image: "https://i.ibb.co/cyMkr4G/kelly-sikkema-JN0-SUc-TOig0-unsplash.jpg"
        },
        {
          id: 5,
          name: "Robert Brown",
          review: "I can't believe I didn't discover this product earlier. It has simplified my daily tasks, and the quality is superb. The customer service team is responsive and helpful.",
          timestamp: "6 days ago",
          image: "https://i.ibb.co/GxCyBgs/daniel-lincoln-NR705be-N-CU-unsplash.jpg"
        }
      ];
      


  return (
    <>
    <p className='text-center xl:text-5xl text-4xl font-extrabold'>Customer Review</p>
    <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:container mx-auto my-8'>
{customerReviews.map(review => <div key={review.id} className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
  <div className="flex justify-between p-4">
    <div className="flex space-x-4">
      <div>
        <img src={review.image} alt="client" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
      </div>
      <div>
        <h4 className="font-bold">{review.name}</h4>
        <span className="text-xs dark:text-gray-400">{review.timestamp}</span>
      </div>
    </div>
    <div className="flex items-center space-x-2 dark:text-yellow-500">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
      </svg>
      <span className="text-xl font-bold">4.5</span>
    </div>
  </div>
  <div className="p-4 space-y-2 text-sm dark:text-gray-400">
    <p>{review.review}</p>
  </div>
</div>)}




</div>


</>
  )
}

export default CustomerReview
