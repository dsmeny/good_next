import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MediaDetail from "../../components/MediaDetail";

const Details = () => {
  const [media, setMedia] = useState(null);
  const router = useRouter();
  const query = router.query.Title;
  const type = router.query.type;

  console.log("media details page query: ", query);

  const styles = {
    height: "100vh",
  };

  useEffect(() => {
    fetch(`/api/${query}?type=${type}`)
      .then((response) => response.json())
      .then((data) => {
        setMedia(data.data);
      });
  }, []);

  return <div style={styles}>{media && <MediaDetail data={media} />}</div>;
};

export default Details;
