import FontAwesome from "@expo/vector-icons/FontAwesome";

export const getRating = (rating) => {
  const ratingStar = [];

  const fullStars = <FontAwesome name="star" size={15} color="#ffa41c" />;
  const halfStars = (
    <FontAwesome name="star-half-empty" size={15} color="#ffa41c" />
  );
  const emptyStars = <FontAwesome name="star-o" size={15} color="#ffa41c" />;

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingStar.push(fullStars);
    } else {
      ratingStar.push(emptyStars);
    }
  }

  if (rating % 1 !== 0) {
    ratingStar[Math.floor(rating)] = halfStars;
  }

  return ratingStar;
};
