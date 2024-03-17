import { useState } from "react";
import FeatherIcon from "feather-icons-react";
import "../styles/components/Carousel.scss";

interface Review {
  author: string;
  content: string;
  rating: number;
  userPhoto: string;
}

interface ReviewsCarouselProps {
  reviewsPerPage: number;
  reviews: Review[];
}

export function Carousel({ reviewsPerPage, reviews }: ReviewsCarouselProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages: number = Math.ceil(reviews.length / reviewsPerPage);
  const totalReviews: number = reviews.length;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
  };

  const startIndex: number = (currentPage - 1) * reviewsPerPage;
  const endIndex: number = startIndex + reviewsPerPage;

  const currentReviews: Review[] = reviews.slice(startIndex, endIndex);

  const isFirstPage: boolean = currentPage === 1;

  return (
    <div className="reviewsDiv">
      <div className="head">
        <div className="reviewHead">
          <h2>Відгуки про товар </h2>
          <p>({totalReviews})</p>
        </div>
        <div className="pagination">
          <span>
            0{currentPage} / 0{totalPages}
          </span>
          <button className="paginationButton" onClick={handlePrevPage}>
            <FeatherIcon icon="arrow-left" size={20}/>
          </button>
          <button className="paginationButton" onClick={handleNextPage}>
            <FeatherIcon icon="arrow-right" size={20}/>
          </button>
        </div>
      </div>
      <div className="reviewsCarousel">
        <div className="reviewsContainer">
        {isFirstPage && (
            <div className="addReviewCard">
              <button onClick={() => console.log("Добавить отзыв")}>
                <FeatherIcon icon="plus" size={150} strokeWidth={0.5} />
              </button>
            </div>
          )}
          {currentReviews.map((review, index) => (
            <div key={index} className="reviewCard">
              <div className="reviewBody">
              <div className="userInfo">
                <img src={review.userPhoto} alt="" className="userPhoto" />
                <div className="nameRating">
                  <div className="rating">
                    {[...Array(review.rating)].map((_, index) => (
                      <span key={index} className="star">
                        <FeatherIcon icon="star" size={10} fill="black" />
                      </span>
                    ))}
                    </div>
                  <h3 className="author">{review.author}</h3>
                </div>
              </div>
              <div className="reviewContent">
                <p>{review.content}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
