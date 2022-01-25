import "../App.css";
import { Grid, Stack } from "@mui/material";
import { Title, ComposedTitle, TitlePage } from "./Title";
import { MyButton } from "./MyButton";

export const Profile = ({ user }) => {
  /*
      {
    "id": 2,
    "name": "Gabriele",
    "surname": "Gioetto",
    "mail": "gabriele.gioetto@gmail.com",
    "interests": [3, 4],
    "format": [0],
    "days": [0, 1, 2, 3, 4, 5],
    "time": "09:20",
    "duration": "400"
  },

    */

  console.log(user);
  console.log(user.interests);
  return (
    <div className="profile">
      <TitlePage variant="h5" text={`Your Profile Information`} />
      <div>
        <ComposedTitle text1={`Name:`} text2={`${user.name} ${user.surname}`} />
      </div>
      <div>
        <ComposedTitle text1={`Mail:`} text2={`${user.mail}`} />
      </div>
      <div>
        <Title text={"Your Interests:"} />
        <Grid
          container
          rowSpacing={2}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 4, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={4} />
          <Grid item xs={4} sm={4} md={4}>
            <div className="profileButtons">
              {user.interests.map((interest) => (
                <MyButton
                  text={interest.name}
                  key={interest.id}
                  selected={false}
                  circular={false}
                  disabled={true}
                />
              ))}
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={4} />
        </Grid>
      </div>
      <div>
        <Title text={"Your formats:"} />
        <Grid
          container
          rowSpacing={2}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 4, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={4} />
          <Grid item xs={4} sm={4} md={4}>
            <div className="profileButtons">
              {user.format.map((f) => (
                <MyButton
                  text={f.name}
                  key={f.id}
                  selected={false}
                  circular={false}
                  disabled={true}
                />
              ))}
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={4} />
        </Grid>
      </div>
      <div>
        <Title text={"Your days:"} sx={{ marginBottom: 1 }} />
        <Grid
          container
          justifyContent="center"
          spacing={{ xs: 4, sm: 4, md: 4 }}
        >
          {user.days.map((d) => (
            <Grid key={d.id} item>
              <MyButton
                text={d.name}
                key={d.id}
                selected={false}
                circular={true}
                disabled={true}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};
