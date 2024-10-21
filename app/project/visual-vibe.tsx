import React from "react";

const visualVibe = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">
        Financial Dashboard Analysis Assistant
      </h2>

      <p className="mt-4">
        The <strong>Financial Dashboard Analysis Assistant</strong> is a
        cutting-edge AI tool designed to analyze and summarize company financial
        dashboard images. By leveraging advanced Large Language Models (LLMs),
        this assistant provides a comprehensive overview of the company&apos;s
        financial situation based on the images submitted by users.
        Additionally, it enables users to ask specific questions regarding the
        dashboard, receiving detailed responses that enhance understanding and
        facilitate informed decision-making.
      </p>

      <h3 className="text-xl font-semibold mt-6">
        Automated Financial Analysis and Summary Generation
      </h3>
      <p className="mt-4">
        Users can upload images of financial dashboards, and the assistant
        processes these images to extract relevant data and insights. This
        automated summarization helps users quickly grasp the financial
        performance indicators, trends, and key metrics without the need for
        manual analysis. By providing clear, concise summaries, the assistant
        streamlines the financial review process, making it more accessible for
        stakeholders.
      </p>

      <h3 className="text-xl font-semibold mt-6">Interactive Query Handling</h3>
      <p className="mt-4">
        The assistant features an interactive text area where users can pose
        questions about the dashboard. Whether inquiring about specific figures,
        trends, or comparisons, the assistant employs its LLM capabilities to
        deliver accurate and contextually relevant answers, enhancing user
        engagement and understanding of the financial data presented.
      </p>

      <h3 className="text-xl font-semibold mt-6">
        Technical Architecture and Model Integration
      </h3>
      <p className="mt-4">
        The system is built on a robust architecture that incorporates multiple
        models, including <strong>OpenAI</strong>, <strong>Gemini</strong>, and{" "}
        <strong>LLaVa</strong>. The following outlines the technical
        implementation:
      </p>

      <ul className="list-disc pl-6 mt-4">
        <li>
          <strong>Model Evaluation:</strong> The performance of each model is
          rigorously evaluated using various metrics, including:
          <ul className="list-disc pl-6 mt-2">
            <li>Rescaled BERT Score</li>
            <li>ROUGE-1 Precision</li>
            <li>ROUGE-1 Recall</li>
            <li>ROUGE-L Precision</li>
            <li>ROUGE-L Recall</li>
          </ul>
        </li>
        <li>
          <strong>Image Analysis:</strong> The assistant processes the uploaded
          images using state-of-the-art image recognition techniques, enabling
          the extraction of textual and numerical data from financial
          dashboards.
        </li>
        <li>
          <strong>Integration with Power BI and Tableau:</strong> The system
          seamlessly integrates with <strong>Power BI</strong> and{" "}
          <strong>Tableau</strong>. Users can simply link their dashboard images
          from these platforms, triggering the analysis process automatically.
          This feature allows for a more streamlined user experience, making it
          easier to transition from data visualization to detailed analysis.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">Performance Insights</h3>
      <p className="mt-4">
        Comparative analysis has shown that the <strong>GPT model</strong>{" "}
        outperforms both the Gemini and LLaVa models in generating accurate
        summaries and responses. This insight allows users to confidently rely
        on the assistant for accurate financial analysis, reinforcing its role
        as a valuable tool for financial professionals.
      </p>

      <h3 className="text-xl font-semibold mt-6">Future Enhancements</h3>
      <p className="mt-4">
        Future iterations of the assistant may include advanced visualization
        capabilities, allowing users to visualize trends and comparisons
        directly within the assistant interface. Additionally, incorporating
        feedback mechanisms can enhance the model&apos;s performance over time,
        ensuring continuous improvement in summarization and query response
        accuracy.
      </p>

      <h3 className="text-xl font-semibold mt-6">Conclusion</h3>
      <p className="mt-4">
        The Financial Dashboard Analysis Assistant represents a significant
        advancement in the automated analysis of financial data. By combining
        powerful LLMs with seamless integration capabilities, the assistant
        provides users with timely insights and answers to their financial
        queries. This innovative tool enhances decision-making processes and
        supports financial professionals in navigating complex data landscapes
        with ease.
      </p>
    </div>
  );
};

export default visualVibe;
