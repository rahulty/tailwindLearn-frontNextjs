export function Carousel({ d }) {
  // const d = [
  //   {
  //     id: "carousel-1",
  //     imgUrl: "https://mdbootstrap.com/img/new/slides/052.jpg",
  //   },
  //   {
  //     id: "carousel-2",
  //     imgUrl: "https://mdbootstrap.com/img/new/slides/043.jpg",
  //   },
  //   {
  //     id: "carousel-3",
  //     imgUrl: "https://mdbootstrap.com/img/new/slides/054.jpg",
  //   },
  // ];

  return (
    <div className="carousel relative overflow-hidden shadow-xl">
      <div className="carousel-inner relative overflow-hidden w-full">
        {d.map((a, i) => {
          const nextIndex = d.length - 1 === i ? 0 : i + 1;
          const prevIndex = i === 0 ? d.length - 1 : i - 1;

          return (
            <>
              <input
                className="carousel-open"
                type="radio"
                id={`carousel-${i + 1}`}
                name="carousel"
                aria-hidden="true"
                hidden={true}
                defaultChecked={i === 0 ? "checked" : ""}
              />
              <div
                className="carousel-item absolute opacity-0 bg-center"
                style={{
                  height: "500px",
                  backgroundImage: `url(${a.imgUrl})`,
                }}
              ></div>
              <label
                htmlFor={`carousel-${prevIndex + 1}`}
                className={`control-${
                  i + 1
                } w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto justify-center content-center`}
              >
                <i className="fas fa-angle-left mt-3"></i>
              </label>
              <label
                htmlFor={`carousel-${nextIndex + 1}`}
                className={`next control-${
                  i + 1
                } w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto`}
              >
                <i className="fas fa-angle-right mt-3"></i>
              </label>
            </>
          );
        })}
        <ol className="carousel-indicators">
          {d.map((a, i) => (
            <li key={`carousel-${i + 1}`} className="inline-block mr-3">
              <label
                htmlFor={`carousel-${i + 1}`}
                className="
              carousel-bullet
              cursor-pointer
              block
              text-4xl text-white
              hover:text-blue-700
            "
              >
                •
              </label>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
