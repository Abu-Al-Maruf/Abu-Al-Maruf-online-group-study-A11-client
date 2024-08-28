import Faq from "react-faq-component";

const FaqSection = () => {
  const data = [
    {
      title: "What constitutes an assignment?",
      content:
        "An assignment is a defined task or project that individuals create for others to complete. It includes key details such as title, description, and due date.",
    },
    {
      title: "What are the steps to create an assignment?",
      content:
        'To create an assignment, log in and access the "Create Assignment" page. Complete the form with necessary details like title, description, and marks.',
    },
    {
      title: "Is it possible to modify an assignment?",
      content:
        "Yes, modifications to an assignment are possible. However, updates should ideally be managed by the assignment’s creator.",
    },
    {
      title: "How do I submit an assignment?",
      content:
        'To submit an assignment, select the "Take Assignment" button for the desired task. Then, complete the submission form with a PDF link and additional notes.',
    },
    {
      title: "Where can I view all assignments?",
      content:
        'Assignments can be viewed on the "All Assignments" page. You can filter assignments based on various criteria, including difficulty levels.',
    },
    {
      title: "Can I remove an assignment?",
      content:
        "Only the assignment’s creator has the authority to delete it. You are unable to delete assignments created by others.",
    },
    {
      title: "What occurs after submitting an assignment?",
      content:
        'Once submitted, an assignment status will be marked as "pending". It will be reviewed and graded by an authorized individual with marking privileges.',
    },
  ];

  // Split the data into two columns
  const firstColumnData = data.slice(0, Math.ceil(data.length / 2));
  const secondColumnData = data.slice(Math.ceil(data.length / 2));

  const styles = {
    bgColor: "transparent",
    titleTextColor: "#1a202c",
    rowTitleColor: "black",
    rowTitleTextSize: "20px",
    rowContentColor: "#4a5568",
    rowContentPaddingBottom: " 20px",
    rowContentPaddingLeft: "5px",
    rowContentTextSize: "16px",
    arrowColor: "#2b6cb0",
  };

  const config = {
    animate: true,
    tabFocus: true,
    expandIcon: "+",
    collapseIcon: "-",
  };

  return (
    <div className="p-6 py-20 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="max-w-5xl py-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First column */}
        <div>
          <Faq
            data={{ rows: firstColumnData }}
            styles={styles}
            config={config}
            className="faq-wrapper"
          />
        </div>
        {/* Second column */}
        <div>
          <Faq
            data={{ rows: secondColumnData }}
            styles={styles}
            config={config}
            className="faq-wrapper"
          />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
