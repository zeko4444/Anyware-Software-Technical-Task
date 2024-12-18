import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
  Avatar,
  CircularProgress, // Import CircularProgress
} from "@mui/material";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";
interface Announcement {
  _id: string;
  title: string;
  content: string;
}

interface Quiz {
  _id: string;
  course: string;
  title: string;
  topic: string;
  dueTo: Date;
  questions: (string | string[])[];
}
const MainContent = () => {
  const { t } = useTranslation();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [quizes, setQuizes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/announcement")
      .then((response) => response.json())
      .then((responseData) => {
        if (Array.isArray(responseData.data)) {
          console.log("ss");

          setAnnouncements(responseData.data);
        } else {
          console.error(
            "Expected an array of announcements, but received:",
            responseData.data
          );
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching announcements:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/quiz")
      .then((response) => response.json())
      .then((responseData) => {
        if (Array.isArray(responseData.data)) {
          setQuizes(responseData.data);
        } else {
          console.error(
            "Expected an array of quizes, but received:",
            responseData.data
          );
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching quizes:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress color="primary" size={60} />
      </Box>
    );
  }

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, backgroundColor: "#f5f5f5" }}
    >
      {/* First Card - EXAMS TIME */}
      <Card sx={{ width: "100%", mb: 3 }}>
        <Grid container direction={{ xs: "column", sm: "row" }}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ flexGrow: 1, p: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: "#18afc7" }}>
                  {t("ExamsTime")}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {t("Definition")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t("Quote")}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "#18afc7",
                    "&:hover": {
                      backgroundColor: "#148f99",
                    },
                  }}
                >
                  {t("Tips")}
                </Button>
              </CardActions>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                backgroundImage:
                  'url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRu-Vmbgn0Wzjr5m0OARXns8e96tFi8EU0qf8CBio9fP0qcBx-b")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: 200,
                borderRadius: "4px 0 0 4px",
              }}
            />
          </Grid>
        </Grid>
      </Card>

      <Grid container spacing={3}>
        {/* Announcements Section */}
        <Grid item xs={12} lg={9}>
          <Card
            sx={{
              width: "100%",
              maxWidth: "100%",
              mb: 3,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Announcements
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }} color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: "bold" }}
                    color="#18afc7"
                  >
                    All
                  </Typography>
                </Box>
              </Box>

              {announcements.map((announcement) => (
                <Box
                  key={announcement._id}
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    paddingTop: "15px",
                  }}
                >
                  <Avatar
                    alt="Mr. Ahmed Mostafa"
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    sx={{ mr: 2, mb: { xs: 2, md: 0 } }}
                  />

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      paddingTop: "3",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        width: "11rem",
                      }}
                    >
                      Mr. Ahmed Mostafa
                    </Typography>
                    <Typography
                      sx={{ fontSize: "12px" }}
                      color="text.secondary"
                    >
                      Math 101
                    </Typography>
                  </Box>
                  <Box sx={{ flexGrow: 1, ml: 3 }}>
                    <Typography variant="body2" color="text.secondary">
                      {announcement.content}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Quizzes Section */}
        <Grid item xs={12} lg={3}>
          <Card
            sx={{
              width: "100%",
              maxWidth: "100%",
              mb: 3,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    What’s due
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }} color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: "bold" }}
                    color="#18afc7"
                  >
                    All
                  </Typography>
                </Box>
              </Box>

              {quizes.map((quiz) => (
                <Box key={quiz._id}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: "2rem",
                    }}
                  >
                    <HourglassEmptyIcon sx={{ mr: 1, color: "#18afc7" }} />
                    <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                      {quiz.title}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      paddingTop: "10px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Course : {quiz.course}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Topic : {quiz.topic}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Due to :{" "}
                      {format(new Date(quiz.dueTo), "d MMM yyyy - h a")}
                    </Typography>
                    <Button
                      size="small"
                      variant="contained"
                      sx={{
                        backgroundColor: "white",
                        color: "#148f99",
                        borderBlockColor: "148f99",
                        fontWeight: "bold",
                        width: "100%",
                        marginTop: "10px",
                        border: "2px solid #148f99",
                        boxShadow: "none",
                      }}
                    >
                      Start Quiz
                    </Button>
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
