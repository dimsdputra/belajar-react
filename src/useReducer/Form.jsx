import React, { useReducer, useRef } from "react";
import { formReducer, INITIAL_STATE } from "./formReducer";

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const tagRef = useRef();

  const handleChange = (event) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: event.target.name, value: event.target.value },
    });
  };

  const handleTags = () => {
    const tags = tagRef.current.value.split(",");
    tags.forEach((tag) => {
      dispatch({ type: "ADD_TAG", payload: tag });
    });
  };

  const handleSubmit = () => {
    dispatch({type: "SUBMIT"})
    console.log(state)
  };
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        <input
          type="text"
          onChange={handleChange}
          name="desc"
          placeholder="Desc"
        />
        <input
          type="number"
          onChange={handleChange}
          name="price"
          placeholder="Price"
        />
        <p>Category:</p>
        <select onChange={handleChange} name="category" id="category">
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-shirts</option>
          <option value="jeans">Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea
          ref={tagRef}
          placeholder="Seperate tags with commas..."
        ></textarea>
        <button onClick={handleTags} type="button">
          Add Tags
        </button>
        <div className="tags">
          {state.tags.map((tag) => (
            <small
              onClick={() => dispatch({ type: "REMOVE_TAG", payload: tag })}
              key={tag}
            >
              {tag}
            </small>
          ))}
        </div>
        <div className="quantity">
          <button onClick={() => dispatch({ type: "DECREASE" })} type="button">
            -
          </button>
          <span>Quantity ({state.quantity})</span>
          <button onClick={() => dispatch({ type: "INCREASE" })} type="button">
            +
          </button>
        </div>
        <button type="button" onClick={handleSubmit}>
          submit
        </button>
      </form>
      <div>
        {/* <h1>{data.title}</h1> */}
        {/* <p>{data}</p> */}
        {/* <p>{data.category}</p>
        <p>Rp. {data.price}</p>
        {data?.tags?.map((tag) => {
            return <p key={tag}>{tag}</p>
        })} */}
      </div>
    </div>
  );
};

export default Form;
