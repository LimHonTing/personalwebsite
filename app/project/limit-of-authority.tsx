import React from "react";

const limitOfAuthority = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">
        Limit of Authority Chatbot for Microsoft Teams
      </h2>

      <p className="mt-4">
        The <strong>Limit of Authority Chatbot</strong> is designed to help
        users within an organization quickly determine their authority for
        specific tasks and responsibilities. The chatbot answers questions
        regarding users&apos; roles, including their job scope, final review
        authority, access control, and any associated limitations.
      </p>

      <h3 className="text-xl font-semibold mt-6">Key Features</h3>
      <p className="mt-4">
        This chatbot provides detailed role-specific information about job
        duties and levels of authority. By simply asking the chatbot a query,
        users can receive a comprehensive description of their job
        responsibilities, the controls they have over tasks, and final
        decision-making power in various areas. It can answer questions such as:
      </p>
      <ul className="list-disc pl-6 mt-4">
        <li>What is my final review authority?</li>
        <li>What tasks do I have access to?</li>
        <li>What is my scope of responsibility?</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">Data Preprocessing</h3>
      <p className="mt-4">
        The original data for job roles and authority limits is provided in a
        PDF format that lacks a structured view, making it difficult to extract
        precise information. To address this, the data must first be manually
        cleaned and converted into a CSV format, where each job role and its
        associated tasks, authorities, and controls are organized in a more
        structured and accessible way.
      </p>

      <p className="mt-4">
        <strong>Steps involved in the preprocessing:</strong>
      </p>
      <ul className="list-disc pl-6 mt-4">
        <li>
          Manually converting the unstructured PDF data into a clean CSV file.
        </li>
        <li>
          Organizing the job roles, tasks, authority descriptions, and
          decision-making controls for better accessibility.
        </li>
        <li>
          Ensuring data quality by removing redundancies and fixing formatting
          issues.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">Technical Implementation</h3>
      <p className="mt-4">
        The system is powered by <strong>LangChain embeddings</strong> to enable
        efficient retrieval of data based on the user&apos;s queries. Here&apos;s how the
        solution is built:
      </p>

      <ul className="list-disc pl-6 mt-4">
        <li>
          <strong>Data Embeddings:</strong> Each job role, its associated tasks,
          and authority limits are embedded into vector space using LangChain&apos;s
          embedding model. This ensures that semantically similar queries return
          the correct job role descriptions.
        </li>
        <li>
          <strong>Vector Store:</strong> All the embedded data is stored in a
          vector database. This vector store is then used as the core data
          source to retrieve information about the user’s authority based on
          their queries.
        </li>
        <li>
          <strong>Query Matching:</strong> When a user asks a question, the
          chatbot finds the most relevant job role information by measuring the
          similarity between the query and the embedded job role data. The
          system then returns a detailed answer regarding the user&apos;s scope of
          authority.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">
        Integration with Microsoft Teams
      </h3>
      <p className="mt-4">
        Once the model and retriever are fully built, the next step is to
        integrate the chatbot into <strong>Microsoft Teams</strong>. This is
        done using Teams Toolkit, which allows for seamless integration of the
        bot into the Teams environment.
      </p>

      <p className="mt-4">
        <strong>Key steps in the integration:</strong>
      </p>
      <ul className="list-disc pl-6 mt-4">
        <li>
          Convert the entire codebase into JavaScript or TypeScript to ensure
          compatibility with Teams.
        </li>
        <li>
          Deploy the chatbot on Microsoft Teams using Teams Toolkit for easy
          accessibility within the organization&apos;s communication channels.
        </li>
        <li>
          Enable daily updates and data refreshing to ensure that the chatbot is
          working with the most up-to-date information about job roles and
          authority limits.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">Conclusion</h3>
      <p className="mt-4">
        The Limit of Authority Chatbot offers a highly effective solution for
        organizations looking to clarify roles and responsibilities. By
        providing quick and accurate answers about job roles, access controls,
        and final authority, it improves both the efficiency of internal queries
        and organizational transparency. Using a combination of LangChain
        embeddings and vector stores, the chatbot retrieves the most relevant
        data to answer users’ queries accurately and effectively.
      </p>
    </div>
  );
};

export default limitOfAuthority;
