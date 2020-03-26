export default {
    props:["user"],
    name: "HomePage",
    template: `
    <section>
        <h3>Welcome home {{  user.username }}!</h3>
    </section>
    `
}