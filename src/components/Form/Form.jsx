import { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { useEffect } from "react";
import { DateTime } from "luxon";

const ContactForm = () => {
  const { cartproducts, precioTotal } = useContext(CartContext);
  const [id, setId] = useState();
  const [date, setDate] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const changeHandler = (event) => {
    const newForm = { ...form, [event.target.name]: event.target.value };
    setForm(newForm);
  };

  const itemsOrder = () => {
    return cartproducts.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const items = itemsOrder();
    const order = {
      buyer: { ...form },
      items: [...items],
      total: precioTotal,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((snapshot) => setId(snapshot.id));
  };

  useEffect(() => {
    setDate(DateTime.now().toFormat("MMMM dd, yyyy"));
  }, [id]);

  return (
    <>
      {typeof id !== "undefined" ? (
        <div className="purchaseDiv">
          <h1 className="purchaseTitle">
            ¡Tu compra ha sido realizada con éxito!
          </h1>
          <div className="puchaseSubdiv">
            <h3 className="purchaseSubtitle">Detalle:</h3>
            <p className="purchaseParagraph">{date}</p>
            <p className="purchaseParagraph">Id de la compra: {id}</p>
            <p className="purchaseParagraph">Total: {precioTotal}$</p>
            <p className="purchaseParagraph">Llega dentro de 5 días</p>
          </div>
        </div>
      ) : (
        <div className="contact">
          <h1 className="contactTitle">Antes de terminar completá tus datos</h1>
          <form className="contact__form" onSubmit={submitHandler}>
            <div className="contact__form__item">
              <label className="contact__form__item__label" htmlFor="name">
                Name
              </label>
              <input
                className="contact__form__item__input"
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={changeHandler}
              />
            </div>
            <div className="contact__form__item">
              <label className="contact__form__item__label" htmlFor="phone">
                Phone
              </label>
              <input
                className="contact__form__item__input"
                type="number"
                name="phone"
                id="phone"
                value={form.phone}
                onChange={changeHandler}
              />
            </div>
            <div className="contact__form__item">
              <label className="contact__form__item__label" htmlFor="email">
                Email
              </label>
              <input
                className="contact__form__item__input"
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={changeHandler}
              />
            </div>
            <button className="contact__form__buttons" type="submit">
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ContactForm;
