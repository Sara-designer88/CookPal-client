import { Dropdown } from "bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { ToggleButton } from "react-bootstrap";

function AddRecipe() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredient, setIngredient] = useState({
    name: "",
    quantity: "",
    unit: "",
  });
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("user");
  const [favChecked, setFavChecked] = useState(false);
  const [preperationTime, setPreperationTime] = useState("");
  const [cookingTime, setCookingTime] = useState("");
 

  const navigate = useNavigate();

  const total = Number(preperationTime) + Number(cookingTime);

  // function to add ingredient to the list of ingredients
  const addIngredient = () => {
    if (!ingredient.name) return;

    const newList = [...ingredients];
    newList.push(ingredient);

    setIngredients(newList);

    // clear inputs
    setIngredient({
      name: "",
      quantity: "",
      unit: "",
    });
  };

  // delete ingredient from the list of ingredients
  const deleteIngredient = (index) => {
    const newList = [...ingredients];
    newList.splice(index, 1);
    setIngredients(newList);
  };

  // function to submit the form and create a new recipe
  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      image: image,
      title: title,
      description: description,
      ingredients: ingredients,
      steps: steps,
      category: category,
      source: "user",
      favChecked: favChecked,
      cookingTime: cookingTime,
      preperationTime: preperationTime,
     
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/recipes`,
        body,
      );
      navigate("/all-recipes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3 style={{ marginTop: "4rem", marginBottom: "2rem" }}>
        Add New Recipe
      </h3>

      <form style={{ margin: "2rem" }}>

        {/* <InputGroup className="mb-2" style={{ marginTop: "2rem" }}>
          <InputGroup.Text id="inputGroup-sizing-default">
            Upload Image URL 
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </InputGroup> */}

        <InputGroup className="mb-4">
          <InputGroup.Text id="inputGroup-sizing-default">
            Title
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-4">
          <InputGroup.Text id="inputGroup-sizing-default">
            Description
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-4">
          <InputGroup.Text id="inputGroup-sizing-default">
            Preperation time
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={preperationTime}
            onChange={(e) => setPreperationTime(e.target.value)}
          />
          <InputGroup.Text id="inputGroup-sizing-default">
            Minutes
          </InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-4">
          <InputGroup.Text id="inputGroup-sizing-default">
            Cooking time
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
          />
          <InputGroup.Text id="inputGroup-sizing-default">
            Minutes
          </InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-4">
          <InputGroup.Text id="inputGroup-sizing-default">
            Total Time
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={total}
            disabled
          />
          <InputGroup.Text id="inputGroup-sizing-default">
            Minutes
          </InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text id="inputGroup-sizing-default">
            Ingredient
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={ingredient.name}
            onChange={(e) =>
              setIngredient({ ...ingredient, name: e.target.value })
            }
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <InputGroup.Text>Quantity and Unit</InputGroup.Text>
          <Form.Control
            aria-label="First name"
            value={ingredient.quantity}
            onChange={(e) =>
              setIngredient({ ...ingredient, quantity: e.target.value })
            }
          />
          <Form.Control
            aria-label="Last name"
            value={ingredient.unit}
            onChange={(e) =>
              setIngredient({ ...ingredient, unit: e.target.value })
            }
          />
        </InputGroup>

        <button
          type="button"
          className="btn btn-primary"
          onClick={addIngredient}
          style={{ display: "flex", alignItems: "left", marginBottom: "2rem" }}
        >
          Add to ingredients{" "}
        </button>

        <InputGroup className="mb-4">
          <InputGroup.Text>Ingredients</InputGroup.Text>
          <div
            style={{
              border: "1px solid #ced4da",
              borderRadius: "0.375rem",
              padding: "0.375rem 0.75rem",
              minHeight: "100px",
              width: "100%",
              backgroundColor: "#fff",
              fontSize: "0.875rem",
            }}
            className="form-control"
          >
            {ingredients.length === 0 ? (
              <div style={{ color: "#6c757d", fontStyle: "italic" }}>
                No ingredients added yet
              </div>
            ) : (
              ingredients.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.25rem 0",
                  }}
                >
                  <div>
                    <strong>{item.name}</strong> - {item.quantity} {item.unit}
                  </div>
                  <button
                    type="button"
                    onClick={() => deleteIngredient(index)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#dc3545",
                      cursor: "pointer",
                      fontSize: "1.2rem",
                      padding: "0 0.25rem",
                    }}
                    title="Remove ingredient"
                  >
                    ×
                  </button>
                </div>
              ))
            )}
          </div>
        </InputGroup>

        <InputGroup className="mb-4">
          <InputGroup.Text>Steps</InputGroup.Text>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
        </InputGroup>

        <Form.Select
          className="mb-4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category </option>
          <option value="Breakfast">Breakfast</option>
          <option value="Brunch">Brunch</option>
          <option value="Lunch">Lunch</option>
          <option value="Chicken">Chicken</option>
          <option value="Beef">Beef</option>
          <option value="Seafood">Seafood</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
          <option value="Snack">Snack</option>
           <option value="Vegetarian">Vegetarian</option>
          <option value="Drinks">Drinks</option>
            <option value="Side">Side</option>
          <option value="Others">Others</option>
        </Form.Select>

        <ToggleButton
          style={{ margin: "1rem" }}
          id="toggle-check"
          type="checkbox"
          variant="outline-primary"
          checked={favChecked}
          value="1"
          onChange={async (e) => {
            setFavChecked(e.target.checked);
          }}
        >
          {favChecked ? "❤️" : "Add to 💔"}
        </ToggleButton>

        <button
          style={{ margin: "1rem" }}
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            navigate("/all-recipes");
          }}
        >
          Back
        </button>

        <button
          style={{ margin: "1rem" }}
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}
export default AddRecipe;
