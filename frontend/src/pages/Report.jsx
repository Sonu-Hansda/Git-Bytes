// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import ScanStatus from "../components/ScanStatus";
// import SecurityScore from "../components/SecurityScore";
// import VulnerabilityCard from "../components/VulnerabilityCard";
// import ChartSummary from "../components/ChartSummary";
// import Footer from "../components/Footer";

// const Report = () => {
//   const vulnerabilities = [
//     {
//       title: "XSS (Cross-Site Scripting)",
//       score: 6,
//       icon: "code",
//       items: [
//         { text: "No reflected XSS found on contact form", status: "safe", issue: "No issues", location: "/contact" },
//         { text: "Inputs missing sanitization in signup form", status: "warning", issue: "Input validation issue", location: "/signup" },
//         { text: "Script executed on search parameter", status: "danger", issue: "Script injection", location: "/search?query=" }
//       ]
//     },
//     {
//       title: "SQL Injection",
//       score: 8,
//       icon: "database",
//       items: [
//         { text: "Prepared statements used in most queries", status: "safe", issue: "No issues", location: "/search" },
//         { text: "Input validation on search form", status: "safe", issue: "No issues", location: "/login" },
//         { text: "Potential SQL injection in admin panel", status: "warning", issue: "Potential SQL injection", location: "/admin/users" }
//       ]
//     },
//     {
//       title: "CSRF (Cross-Site Request Forgery)",
//       score: 9,
//       icon: "exchange-alt",
//       items: [
//         { text: "CSRF tokens implemented on all forms", status: "safe", issue: "No issues", location: "/profile/update" },
//         { text: "SameSite cookie attributes set correctly", status: "safe", issue: "No issues", location: "/payment" },
//         { text: "Proper referrer policy implemented", status: "safe", issue: "No issues", location: "/settings" }
//       ]
//     },
//     {
//       title: "SSL Misconfigurations",
//       score: 7,
//       icon: "lock",
//       items: [
//         { text: "Valid SSL certificate installed", status: "safe", issue: "Valid certificate", location: "Expires in 264 days" },
//         { text: "TLS 1.0 still enabled on server", status: "warning", issue: "TLS 1.0 enabled", location: "Server config" },
//         { text: "Weak cipher suites detected", status: "warning", issue: "Weak cipher suites", location: "DES-CBC3-SHA" }
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1A1A1A] text-white font-sans">
//       <Navbar />
      
//       <main className="container mx-auto px-6 py-8">
//         <ScanStatus />
//         <SecurityScore />
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           {vulnerabilities.map((vuln, index) => (
//             <VulnerabilityCard 
//               key={index}
//               title={vuln.title}
//               score={vuln.score}
//               icon={vuln.icon}
//               items={vuln.items}
//             />
//           ))}
//         </div>
        
//         <ChartSummary />
        
//         <div className="flex justify-center mt-8">
//           <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md flex items-center">
//             <i className="fas fa-arrow-left mr-2"></i>
//             Go Back to Home
//           </button>
//         </div>
//       </main>
      
//       <Footer />
//     </div>
//   );
// };

// export default Report;




// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import ScanStatus from "../components/ScanStatus";
// import SecurityScore from "../components/SecurityScore";
// import VulnerabilityCard from "../components/VulnerabilityCard";
// import ChartSummary from "../components/ChartSummary";
// import Footer from "../components/Footer";

// const Report = () => {
//   const [missingHeaders, setMissingHeaders] = useState([]);
//     const [url, setUrl] = useState("https://amazon.in");
//     useEffect(() => {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       fetch("/api/header-scanner", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           },
//           body: JSON.stringify({url})
//       }). then((res)=>res.json()).then((data)=>{setMissingHeaders(data.feedback || []);}).catch((err)=>{
//         console.log(err);
//       });
//     }, [url]);
  

//   const vulnerabilities = [
//     {
//       title: "XSS (Cross-Site Scripting)",
//       score: 6,
//       icon: "code",
//       items: [
//         { text: "No reflected XSS found on contact form", status: "safe", issue: "No issues", location: "/contact" },
//         { text: "Inputs missing sanitization in signup form", status: "warning", issue: "Input validation issue", location: "/signup" },
//         { text: "Script executed on search parameter", status: "danger", issue: "Script injection", location: "/search?query=" }
//       ]
//     },
//     {
//       title: " Missing Headers",
//       score: 8,
//       icon: "database",
//       items: missingHeaders,
//     },
//     {
//       title: "CSRF (Cross-Site Request Forgery)",
//       score: 9,
//       icon: "exchange-alt",
//       items: [
//         { text: "CSRF tokens implemented on all forms", status: "safe", issue: "No issues", location: "/profile/update" },
//         { text: "SameSite cookie attributes set correctly", status: "safe", issue: "No issues", location: "/payment" },
//         { text: "Proper referrer policy implemented", status: "safe", issue: "No issues", location: "/settings" }
//       ]
//     },
//     {
//       title: "SSL Misconfigurations",
//       score: 7,
//       icon: "lock",
//       items: [
//         { text: "Valid SSL certificate installed", status: "safe", issue: "Valid certificate", location: "Expires in 264 days" },
//         { text: "TLS 1.0 still enabled on server", status: "warning", issue: "TLS 1.0 enabled", location: "Server config" },
//         { text: "Weak cipher suites detected", status: "warning", issue: "Weak cipher suites", location: "DES-CBC3-SHA" }
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1A1A1A] text-white font-sans">
//       <Navbar />

//       <main className="container mx-auto px-6 py-8">
//         <ScanStatus />
//         <SecurityScore />

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           {vulnerabilities.map((vuln, index) => (
//             <VulnerabilityCard
//               key={index}
//               title={vuln.title}
//               score={vuln.score}
//               icon={vuln.icon}
//               items={vuln.items}
//             />
//           ))}
//         </div>

//         <ChartSummary />

//         <div className="flex justify-center mt-8">
//           <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md flex items-center">
//             <i className="fas fa-arrow-left mr-2"></i>
//             Go Back to Home
//           </button>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Report;




// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import ScanStatus from "../components/ScanStatus";
// import SecurityScore from "../components/SecurityScore";
// import VulnerabilityCard from "../components/VulnerabilityCard";
// import ChartSummary from "../components/ChartSummary";
// import Footer from "../components/Footer";
// import { Link } from "react-router-dom";
// import Chatbot from "../components/Chatbot";


// const Report = () => {
//   const [missingHeaders, setMissingHeaders] = useState([]);
//   const [url, setUrl] = useState("https://ide.codershub.live");
//   const [missingHeaderScore, setMissingHeaderScore] = useState(0);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     console.log("hello");
//     fetch("/api/header-scanner", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ url }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         const feedback = data.feedback || [];
//         console.log(feedback);
//         setMissingHeaders(feedback);

//         // Dynamic score logic: 10 - number of missing headers (min 0, max 10)
//         const score = Math.max(0, 10 - feedback.length);
//         setMissingHeaderScore(score);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [url]);

   

//   useEffect(() => {
//     if (!url) return; // prevent fetch if url is empty
  
//     // Scroll to top when a new URL is scanned
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     console.log("Scanning SSL for:", url);
  
//     // Make POST request to your SSL Scanner API
//     fetch("/api/ssl_scanner", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ url }),
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Network response was not ok");
//         return res.json();
//       })
//       .then((data) => {
//         const feedback = data.feedback || [];
//         console.log("Missing Security Headers:", feedback);
  
//         setMissingHeaders(feedback);
  
//         // Calculate score (max 10, min 0)
//         const score = Math.max(0, 10 - feedback.length);
//         setMissingHeaderScore(score);
//       })
//       .catch((err) => {
//         console.error("SSL Scanner Error:", err);
//       });
//   }, [url]);
  

//   const vulnerabilities = [
//     {
//       title: "XSS (Cross-Site Scripting)",
//       score: 6,
//       icon: "code",
//       items: [
//         { text: "No reflected XSS found on contact form", status: "safe", issue: "No issues", location: "/contact" },
//         { text: "Inputs missing sanitization in signup form", status: "warning", issue: "Input validation issue", location: "/signup" },
//         { text: "Script executed on search parameter", status: "danger", issue: "Script injection", location: "/search?query=" }
//       ]
//     },
//     {
//       title: "Missing Headers",
//       score: missingHeaderScore,
//       icon: "database",
//       items: missingHeaders,
//     },
//     {
//       title: "CSRF (Cross-Site Request Forgery)",
//       score: 9,
//       icon: "exchange-alt",
//       items: [
//         { text: "CSRF tokens implemented on all forms", status: "safe", issue: "No issues", location: "/profile/update" },
//         { text: "SameSite cookie attributes set correctly", status: "safe", issue: "No issues", location: "/payment" },
//         { text: "Proper referrer policy implemented", status: "safe", issue: "No issues", location: "/settings" }
//       ]
//     },
//     {
//       title: "Subdomain Takeover",
//       score: 9, // Full score since there's no issue
//       icon: "network-wired",
//       items: [
//         {
//           text: "No unclaimed DNS entries found",
//           status: "safe",
//           issue: "No vulnerable subdomain records",
//           location: "DNS records"
//         },
//         {
//           text: "All subdomains correctly resolve to active services",
//           status: "safe",
//           issue: "All services actively used",
//           location: "example.subdomain.com"
//         },
//         {
//           text: "No dangling CNAMEs or external services detected",
//           status: "safe",
//           issue: "No unused third-party mappings",
//           location: "DNS configuration"
//         }
//       ]
//     },
//     {
//       title: "SSRF (Server-Side Request Forgery)",
//       score: 8,
//       icon: "exchange-alt",
//       items: [
//         {
//           text: "No internal IPs or localhost access detected via input fields",
//           status: "safe",
//           issue: "No SSRF vector through user input",
//           location: "/api/image-fetch"
//         },
//         {
//           text: "Strict allow-listing enforced for outbound requests",
//           status: "safe",
//           issue: "Only trusted domains allowed",
//           location: "Server-side request handling"
//         },
//         {
//           text: "Metadata URL access blocked by firewall or application logic",
//           status: "safe",
//           issue: "Instance metadata protection in place",
//           location: "AWS/GCP metadata endpoints"
//         }
//       ]
//     }
//     ,
    
//     {
//       title: "SSL Misconfigurations",
//       score: 7,
//       icon: "lock",
//       items: [
//         { text: "Valid SSL certificate installed", status: "safe", issue: "Valid certificate", location: "Expires in 264 days" },
//         { text: "TLS 1.0 still enabled on server", status: "warning", issue: "TLS 1.0 enabled", location: "Server config" },
//         { text: "Weak cipher suites detected", status: "warning", issue: "Weak cipher suites", location: "DES-CBC3-SHA" }
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1A1A1A] text-white font-sans">
//       <Navbar />

//       <main className="container mx-auto px-6 py-8">
//         <ScanStatus />
//         <SecurityScore />

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           {vulnerabilities.map((vuln, index) => (
//             <VulnerabilityCard
//               key={index}
//               title={vuln.title}
//               score={vuln.score}
//               icon={vuln.icon}
//               items={vuln.items}
//             />
//           ))}
//         </div>

//         <ChartSummary />

//         <div className="flex justify-center mt-8">
//           <Link to="/"  className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md flex items-center">
//             <i className="fas fa-arrow-left mr-2"></i>
//             Go Back to Home
//           </Link>
//         </div>
//       </main>

//       <Footer />
//       <Chatbot/>
//     </div>
//   );
// };

// export default Report;

 



import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ScanStatus from "../components/ScanStatus";
import SecurityScore from "../components/SecurityScore";
import VulnerabilityCard from "../components/VulnerabilityCard";
import ChartSummary from "../components/ChartSummary";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import Chatbot from "../components/Chatbot";

// Helper: derive status label from score
const scoreToStatus = (score) => {
  if (score >= 8) return "safe";
  if (score >= 5) return "warning";
  return "danger";
};

const Report = () => {
  const { paramURL } = useParams();
  const url = paramURL ? decodeURIComponent(paramURL) : null;
  const scanDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // --- State for each scanner ---
  const [headersData, setHeadersData] = useState({ feedback: [], score: null });
  const [sslData, setSslData] = useState({ feedback: [], score: null });
  const [csrfData, setCsrfData] = useState([]);
  const [xssData, setXssData] = useState({ feedback: [], score: null });
  const [sqlData, setSqlData] = useState({ feedback: [], score: null });
  const [subdomainData, setSubdomainData] = useState({ feedback: [], score: null });
  const [ssrfData, setSsrfData] = useState({ feedback: [], score: null });

  const [loading, setLoading] = useState(true);
  const [loadingStates, setLoadingStates] = useState({
    headers: true, ssl: true, csrf: true,
    xss: true, sql: true, subdomain: true, ssrf: true,
  });

  const markDone = (key) =>
    setLoadingStates((prev) => ({ ...prev, [key]: false }));

  useEffect(() => {
    if (!url) return;
    window.scrollTo({ top: 0, behavior: "smooth" });

    // --- Individual fetch functions ---
    const fetchHeaders = async () => {
      try {
        const res = await fetch("/api/header-scanner", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url }),
        });
        const data = await res.json();
        const feedback = data.feedback || [];
        const score = Math.max(0, 10 - feedback.length);
        setHeadersData({ feedback, score });
      } catch (e) {
        setHeadersData({ feedback: ["Header scan failed"], score: 0 });
      } finally { markDone("headers"); }
    };

    const fetchSSL = async () => {
      try {
        const res = await fetch("/api/ssl-scanner", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url }),
        });
        const data = await res.json();
        const feedback = data.feedback || [];
        const score = data.score !== undefined
          ? data.score
          : Math.max(0, 10 - feedback.length);
        setSslData({ feedback, score });
      } catch (e) {
        setSslData({ feedback: ["SSL scan failed"], score: 0 });
      } finally { markDone("ssl"); }
    };

    const fetchCSRF = async () => {
      try {
        const res = await fetch("/api/csrf-scanner", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url }),
        });
        const data = await res.json();
        setCsrfData(Array.isArray(data) ? data : []);
      } catch (e) {
        setCsrfData(["❌ CSRF scan failed"]);
      } finally { markDone("csrf"); }
    };

    const fetchXSS = async () => {
      try {
        const res = await fetch("/api/xss-scanner", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url }),
        });
        const data = await res.json();
        setXssData({ feedback: data.feedback || [], score: data.score ?? 5 });
      } catch (e) {
        setXssData({ feedback: ["XSS scan failed"], score: 0 });
      } finally { markDone("xss"); }
    };

    const fetchSQL = async () => {
      try {
        const res = await fetch("/api/sql-scanner", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url }),
        });
        const data = await res.json();
        setSqlData({ feedback: data.feedback || [], score: data.score ?? 5 });
      } catch (e) {
        setSqlData({ feedback: ["SQL scan failed"], score: 0 });
      } finally { markDone("sql"); }
    };

    const fetchSubdomain = async () => {
      try {
        const res = await fetch("/api/subdomain-scanner", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url }),
        });
        const data = await res.json();
        setSubdomainData({ feedback: data.feedback || [], score: data.score ?? 9 });
      } catch (e) {
        setSubdomainData({ feedback: ["Subdomain scan failed"], score: 9 });
      } finally { markDone("subdomain"); }
    };

    const fetchSSRF = async () => {
      try {
        const res = await fetch("/api/ssrf-scanner", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url }),
        });
        const data = await res.json();
        setSsrfData({ feedback: data.feedback || [], score: data.score ?? 8 });
      } catch (e) {
        setSsrfData({ feedback: ["SSRF scan failed"], score: 8 });
      } finally { markDone("ssrf"); }
    };

    Promise.all([
      fetchHeaders(), fetchSSL(), fetchCSRF(),
      fetchXSS(), fetchSQL(), fetchSubdomain(), fetchSSRF(),
    ]).finally(() => setLoading(false));

  }, [url]);

  // Derive CSRF score from result strings
  const csrfScore = csrfData.length > 0 && csrfData[0]?.includes("✔️") ? 9 : 4;

  // --- Build vulnerability cards ---
  const vulnerabilities = [
    {
      title: "XSS (Cross-Site Scripting)",
      score: xssData.score,
      icon: "code",
      loading: loadingStates.xss,
      items: xssData.feedback.map((text) => ({
        text,
        status: scoreToStatus(xssData.score),
        issue: text,
        location: "Page Source",
      })),
    },
    {
      title: "SQL Injection",
      score: sqlData.score,
      icon: "database",
      loading: loadingStates.sql,
      items: sqlData.feedback.map((text) => ({
        text,
        status: scoreToStatus(sqlData.score),
        issue: text,
        location: "Input Fields / URL Parameters",
      })),
    },
    {
      title: "Missing Security Headers",
      score: headersData.score,
      icon: "shield-alt",
      loading: loadingStates.headers,
      items: headersData.feedback.slice(1).map((text) => ({
        status: "warning",
        issue: text,
        location: "HTTP Response Headers",
      })),
    },
    {
      title: "CSRF (Cross-Site Request Forgery)",
      score: csrfScore,
      icon: "exchange-alt",
      loading: loadingStates.csrf,
      items: csrfData,
    },
    {
      title: "SSL / TLS Configuration",
      score: sslData.score,
      icon: "lock",
      loading: loadingStates.ssl,
      items: sslData.feedback.map((text) => ({
        text,
        status: scoreToStatus(sslData.score),
        issue: text,
        location: "SSL Certificate",
      })),
    },
    {
      title: "Subdomain Takeover",
      score: subdomainData.score,
      icon: "network-wired",
      loading: loadingStates.subdomain,
      items: subdomainData.feedback.map((text) => ({
        text,
        status: scoreToStatus(subdomainData.score),
        issue: text,
        location: "DNS Records",
      })),
    },
    {
      title: "SSRF (Server-Side Request Forgery)",
      score: ssrfData.score,
      icon: "server",
      loading: loadingStates.ssrf,
      items: ssrfData.feedback.map((text) => ({
        text,
        status: scoreToStatus(ssrfData.score),
        issue: text,
        location: "URL Parameters / Form Fields",
      })),
    },
  ];

  // Calculate average score from all numeric scores
  const numericScores = vulnerabilities
    .map((v) => v.score)
    .filter((s) => typeof s === "number" && s !== null);
  const avgScore =
    numericScores.length > 0
      ? Math.round(numericScores.reduce((a, b) => a + b, 0) / numericScores.length)
      : 0;

  // Chart scores object
  const chartScores = {
    xss: xssData.score ?? 0,
    sql: sqlData.score ?? 0,
    csrf: csrfScore,
    ssl: sslData.score ?? 0,
    headers: headersData.score ?? 0,
    subdomain: subdomainData.score ?? 0,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1A1A1A] text-white font-sans">
      <Navbar />

      <main className="container mx-auto px-6 py-8">
        <ScanStatus url={url} date={scanDate} />
        <SecurityScore score={avgScore} />

        {loading && (
          <div className="text-center py-4 mb-6">
            <span className="text-[#00FF9D] font-mono animate-pulse text-sm">
              ⚡ Running {Object.values(loadingStates).filter(Boolean).length} active scan(s)...
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {vulnerabilities.map((vuln, index) => (
            <div key={index} className="relative">
              {vuln.loading && (
                <div className="absolute inset-0 bg-gray-900 bg-opacity-60 rounded-lg flex items-center justify-center z-10">
                  <span className="text-[#00FF9D] font-mono text-sm animate-pulse">Scanning...</span>
                </div>
              )}
              <VulnerabilityCard
                title={vuln.title}
                score={vuln.score}
                icon={vuln.icon}
                items={vuln.items}
              />
            </div>
          ))}
        </div>

        <ChartSummary scores={chartScores} />

        <div className="flex justify-center mt-8">
          <Link
            to="/"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Go Back to Home
          </Link>
        </div>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Report;
