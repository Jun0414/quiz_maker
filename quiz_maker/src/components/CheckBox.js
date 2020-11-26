import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

// 체크박스 https://material-ui.com/components/checkboxes/

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
    checkedC: false,
  });

  const handleChange = (event) => {
    if ([event.target.name] === "checkedA")
      setState({ checkedB: false, checkedC: false, [event.target.name]: event.target.checked });
    else if ([event.target.name] === "checkedB")
      setState({ checkedA: false, checkedC: false, [event.target.name]: event.target.checked });
    else //([event.target.name] === "checkedC")
      setState({ checkedA: false, checkedB: false, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <idv>
        <FormControlLabel
          control={
            <Checkbox
              style={{ width: 50, height: 30 }}                             // 체크박스 margin같은 역할
              icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 50 }} />}  // 체크하기 전 체크박스 사이즈
              checkedIcon={<CheckBoxIcon style={{ fontSize: 50 }} />}       // 체크한 후 체크박스 사이즈
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
              color="primary"
            />
          }
          label="객관식 문제"
        />
      </idv>
      <div>
        <FormControlLabel
          control={
            <Checkbox
              style={{ width: 50, height: 30 }}
              icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 50 }} />}
              checkedIcon={<CheckBoxIcon style={{ fontSize: 50 }} />}
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="단답형 문제"
        />
      </div>
      <div>
        <FormControlLabel
          control={
            <Checkbox
              style={{ width: 50, height: 30 }}
              icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 50 }} />}
              checkedIcon={<CheckBoxIcon style={{ fontSize: 50 }} />}
              checked={state.checkedC}
              onChange={handleChange}
              name="checkedC"
              color="primary"
            />
          }
          label="주관식 문제"
        />
      </div>
    </div>
  );
}