import ResCarousel from "../components/Carousel";
import styles from "../styles/modal.module.scss";
import Icon from "../components/Icon";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { homeActions } from "../redux/actions";
import { useState } from "react";
import axios from 'axios';

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  content: "",
};

export default function Modal(props) {
  const [formData, setFormData] = useState(initialForm);
  const dispatch = useDispatch();
  const homeState = useSelector((state) => {
    return state.home;
  });

  const formHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submitHandler = e => {
    e.preventDefault();

    const body = {
      personalizations: [
        {
          to: [
            {
              email: "e94canales@gmail.com",
              name: "Erick Canales"
            }
          ],
          subject: `Sender: ${formData.firstName} ${formData.lastName} Message Sent From PORTFOLIO`
        }
      ],
      from: {
        email: "e94canales@gmail.com",
        name: `${formData.firstName} ${formData.lastName}`
      },
      content: [
        {
          type: "text/plain",
          value: `${formData.content} \n>> Email: ${formData.email}`
        }
      ]
    }

    axios({method: 'post', url: 'https://cors-anywhere.herokuapp.com/https://api.sendgrid.com/v3/mail/send', headers: {'Authorization': `bearer ${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`}, data: body})
    .then(res => {
      return
    }).catch(err => {
      return
    });
  }

  if (homeState.modalType === "showcase") {
    return (
      <div className={styles.modalShowcaseContainer}>
        <div className={styles.carouselContainer}>
          <ResCarousel />
        </div>
        <div
          className={styles.closeContainer}
          onClick={() => {
            dispatch(homeActions.setModalType(null));
            dispatch(homeActions.toggleModalActive("override", false));
          }}
        >
          <div className={styles.iconContainer}>
            <Icon iconName={faTimes} />
          </div>
        </div>
      </div>
    );
  }

  if (homeState.modalType === "intro") {
    return (
      <div className={styles.info}>
        <div className={styles.detailContainer}>
          <h5>Erick Canales</h5>
          <img src="/images/portrait.webp" className={styles.portrait} />
        </div>
        <h4>
          Welcome. My name is Erick Canales and I am a full time Web Development
          student at Lambda living in California. I've always been a creative
          type, starting off with music and now expanding into the web
          development realm. I enjoy creating things that can resonate with
          people and are helpful. If you haven't checked out my work, you can
          through here. If you're like me and like looking at pretty things,
          here's my showcase.
        </h4>

        <div
          className={styles.introCloseIcon}
          onClick={() => {
            dispatch(homeActions.setModalType(null));
            dispatch(homeActions.toggleModalActive("override", false));
          }}
        >
          <Icon iconName={faTimes} />
        </div>
      </div>
    );
  }

  if (homeState.modalType === "contact") {
    return (
      <div className={styles.contactContainer}>
        <div className={styles.title}>
          <h5>Say Hello!</h5>
        </div>
        <div className={styles.formContainer}>
          <form autoComplete="off">
            {/* <div className={styles.namesContainer}> */}
              <input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={formHandler}
                className={styles.nameInput}
              ></input>
              <input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={formHandler}
                className={styles.nameInput}
              ></input>
            {/* </div> */}
            {/* <div className={styles.emailInputContainer}> */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={formHandler}
                className={styles.emailInput}
              ></input>
            {/* </div> */}
            {/* <div className={styles.contentContainer}> */}
              <textarea
                rows="9"
                name="content"
                value={formData.content}
                onChange={formHandler}
                className={styles.contentInput}
                placeholder='Type your message here'
              ></textarea>
            {/* </div> */}
            <button onClick={submitHandler} className={styles.submitButton}>Submit</button>
          </form>
        </div>
        

        <div
          className={styles.contactCloseIcon}
          onClick={() => {
            dispatch(homeActions.setModalType(null));
            dispatch(homeActions.toggleModalActive("override", false));
          }}
        >
          <Icon iconName={faTimes} />
        </div>
      </div>
    );
  }
}
