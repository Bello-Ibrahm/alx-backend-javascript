export default function handleProfileSignup() {
  const uPhoto = uploadPhoto();
  const cUser = createUser();

  return Promise.all([uPhoto, cUser]).then((item) => {
    console.log(`${item[0].body} ${item[1].firstName} ${item[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
