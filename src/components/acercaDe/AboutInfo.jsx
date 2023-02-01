import martina from "../imagenes/Martina.jpeg"
import victoria from "../imagenes/Victoria.jpeg"
import delfina from "../imagenes/Delfina.jpeg"

export const aboutInfo = [
  {
    photo: (
      <img
        src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width="150"
        height="150"
        viewBox="0 0 16 15"
      />
    ),
    heading: "Fabrizio ",
  },
  {
    photo: (
      <img
        src="https://images.pexels.com/photos/6551438/pexels-photo-6551438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width="150"
        height="150"
        viewBox="0 0 16 15"
      />
    ),
    heading: "Lucas Londero",
  },
  {
    photo: (
      <img
        src={delfina}
        alt=""
        width="150"
        height="150"
        viewBox="0 0 16 15"
      />
    ),
    heading: "Delfina Paz Zavalia",
  },
  {
    photo: (
      <img
        src={martina}
        alt=""
        width="150"
        height="150"
        viewBox="0 0 16 15"
      />
    ),
    heading: "Martina Soria Lanzi",
  },
  {
    photo: (
      <img
        src={victoria}
        alt=""
        width="150"
        height="150"
        viewBox="0 0 16 15"
      />
    ),
    heading: "Victoria Teran",
  },
];
