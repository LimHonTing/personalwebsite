import React from "react";

const genAIVendorAnalysis = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">
        GenAI Vendor Performance Analysis Assistant
      </h2>

      <p className="mt-4">
        The <strong>GenAI Vendor Performance Analysis Assistant</strong> is an
        advanced AI-powered tool designed to assist organizations in comparing
        vendor performance across various metrics. This system automates the
        process of evaluating the suppliers that provide materials to the
        organization. By analyzing data from multiple dashboards, the assistant
        generates a summary and detailed figures, giving clear insights into
        vendor performance, and references the relevant dashboards for further
        exploration.
      </p>

      <h3 className="text-xl font-semibold mt-6">
        Automated Vendor Performance Comparison
      </h3>
      <p className="mt-4">
        The assistant aggregates data from multiple sources to provide a
        comprehensive overview of vendor performance. It not only evaluates
        performance metrics but also visualizes the results through charts and
        figures. These figures help in understanding how each vendor is
        performing in terms of delivery time, cost efficiency, material quality,
        and other relevant KPIs.
      </p>

      <h3 className="text-xl font-semibold mt-6">
        Technical Architecture and Data Flow
      </h3>
      <p className="mt-4">
        The system is built to handle dynamic and real-time data by integrating
        directly with <strong>PowerBI</strong> dashboards through
        <strong>semantic links</strong>. The following steps outline the
        technical implementation:
      </p>

      <ul className="list-disc pl-6 mt-4">
        <li>
          <strong>Data Integration:</strong> The assistant connects to multiple
          PowerBI dashboards and retrieves the data behind the visualizations
          using semantic links. This allows for direct access to raw vendor
          performance data.
        </li>
        <li>
          <strong>Data Pipeline:</strong> A continuous data pipeline is set up
          to refresh data daily. This ensures that the data being analyzed is
          always up-to-date and reflects the latest vendor performance.
        </li>
        <li>
          <strong>SQL Database:</strong> All retrieved data is stored in a
          centralized <strong>SQL database</strong>. The data is cleaned and
          standardized before being stored to ensure consistency across all
          vendor-related metrics. This facilitates querying and analysis of the
          data.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">
        LangChain and LangGraph Model
      </h3>
      <p className="mt-4">
        The core intelligence behind the assistant lies in a network of agents
        built using <strong>LangChain</strong> and <strong>LangGraph</strong>.
        These agents work collaboratively to process the data and generate the
        final output. Here’s how each component functions:
      </p>

      <ol className="list-decimal pl-6 mt-4">
        <li>
          <strong>Metadata Agent:</strong> This agent retrieves the metadata
          from the SQL database, including table structures and column
          descriptions. It sends this information to a language model to
          determine which columns are relevant for the comparison based on the
          user’s query.
        </li>
        <li>
          <strong>SQL Query Agent:</strong> Based on the metadata, this agent
          queries the SQL database to fetch the necessary data from relevant
          tables.
        </li>
        <li>
          <strong>Math Tools Agent:</strong> This agent processes the raw data,
          aggregating results based on user-defined parameters like vendor
          ratings, delivery time, or cost-effectiveness.
        </li>
        <li>
          <strong>Plotting Agent:</strong> Once the data is aggregated, the
          plotting agent generates visualizations using <strong>Plotly</strong>.
          These visualizations provide an easy-to-understand comparison between
          different vendors.
        </li>
        <li>
          <strong>Referencing Agent:</strong> Finally, this agent compares the
          generated results with existing PowerBI dashboards. It checks the
          applied chart filters and identifies which dashboards display similar
          data, ensuring consistency across reporting tools.
        </li>
      </ol>

      <h3 className="text-xl font-semibold mt-6">
        LangGraph: Connecting the Agents
      </h3>
      <p className="mt-4">
        All agents are interconnected using <strong>LangGraph</strong>. This
        framework ensures that the entire process—from metadata retrieval to SQL
        querying, data aggregation, visualization, and dashboard
        referencing—runs smoothly and is fully automated. By connecting the
        agents, the system creates a streamlined network that continually
        processes new data and delivers updated results.
      </p>

      <h3 className="text-xl font-semibold mt-6">Future Enhancements</h3>
      <p className="mt-4">
        Future iterations of the assistant can integrate feedback loops to
        further refine vendor performance evaluation models. Additionally, the
        assistant can incorporate predictive analytics to forecast vendor
        performance based on historical data trends, helping organizations make
        proactive decisions.
      </p>

      <h3 className="text-xl font-semibold mt-6">Conclusion</h3>
      <p className="mt-4">
        The GenAI Vendor Performance Analysis Assistant simplifies the process
        of comparing vendor performance by leveraging a robust technical
        infrastructure built on LangChain and LangGraph. It efficiently
        processes data from multiple PowerBI dashboards, stores it in a SQL
        database, and generates actionable insights. Through dynamic
        visualizations and intelligent dashboard referencing, it provides
        organizations with an intuitive tool to enhance decision-making in
        vendor management.
      </p>
    </div>
  );
};

export default genAIVendorAnalysis;
