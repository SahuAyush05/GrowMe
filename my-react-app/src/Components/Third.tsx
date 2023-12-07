import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Third() {
  const [checked1, setChecked1] = React.useState([false, false]);
  const [drop1, setDrop1] = React.useState(false);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1([event.target.checked, checked1[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1([checked1[0], event.target.checked]);
  };

  const children1 = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="support"
        control={<Checkbox checked={checked1[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="customer_success"
        control={<Checkbox checked={checked1[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  const drop1Down = () => {
    setDrop1(!drop1);
  };

  const [checked2, setChecked2] = React.useState([false, false, false]);
  const [drop2, setDrop2] = React.useState(false);

  const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2([event.target.checked, event.target.checked, event.target.checked]);
  };

  const handleChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2([event.target.checked,checked2[1],checked2[2]]);
  };

  const handleChange6 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2([checked2[0],  event.target.checked,checked2[2]]);
  };

  const handleChange7 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2([checked2[0], checked2[1], event.target.checked]);
  };

  const children2 = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="graphic_design"
        control={<Checkbox checked={checked2[0]} onChange={handleChange5} />}
      />
      <FormControlLabel
        label="product_design"
        control={<Checkbox checked={checked2[1]} onChange={handleChange6} />}
      />
      <FormControlLabel
        label="web_design"
        control={<Checkbox checked={checked2[2]} onChange={handleChange7} />}
      />
    </Box>
  );

  const drop2Down = () => {
    setDrop2(!drop2);
  };

  return (
    <div style={{display:"flex",flexDirection:"column", backgroundColor:"white"}}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <ArrowDropDownIcon onClick={drop1Down} style={{ padding: "5px" }} />
        </div>
        <div>
          <FormControlLabel
            label="customer_service (2)"
            control={
              <Checkbox
                checked={checked1[0] && checked1[1]}
                indeterminate={checked1[0] !== checked1[1]}
                onChange={handleChange1}
              />
            }
          />
          {drop1 && children1}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <ArrowDropDownIcon onClick={drop2Down} style={{ padding: "5px" }} />
        </div>
        <div>
          <FormControlLabel
            label="design (3)"
            control={
              <Checkbox
                checked={checked2[0] && checked2[1] && checked2[2]}
                indeterminate={
                  checked2[0] !== checked2[1] ||
                  checked2[0] !== checked2[2] ||
                  checked2[1] !== checked2[2]
                }
                onChange={handleChange4}
              />
            }
          />
          {drop2 && children2}
        </div>
      </div>
    </div>
  );
}
