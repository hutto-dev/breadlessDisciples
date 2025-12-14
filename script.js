document.addEventListener("DOMContentLoaded", () => {
  // MENU

  if (document.body.classList.contains("page-menu")) {
    const topics = document.querySelectorAll(".topic");

    topics.forEach((topic) => {
      topic.addEventListener("click", () => {
        const topicId = topic.id;
        window.location.href = `./scripture.html?topic=${topicId}`;
      });
    });

    // grab the topics
    // foreach the topics
    // add eventlistenr for a click
    // when click happens, grab the topic id
    // assign the topic id to the windows thing
  }

  // SCRIPTURE
  if (document.body.classList.contains("page-scripture")) {
    // Search after the ? in the url
    const params = new URLSearchParams(window.location.search);
    const topic = params.get("topic");

    const scriptureTitle = document.getElementById("scripture-title");
    scriptureTitle.textContent = topic;
  }
});
