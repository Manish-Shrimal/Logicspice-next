
// "use client";
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// interface Node {
//   id: number;
//   x: number;
//   y: number;
//   size: number;
// }

// interface Connection {
//   from: number;
//   to: number;
// }

// export default function BlockchainAnimation() {
//   const [nodes, setNodes] = useState<Node[]>([]);
//   const [connections, setConnections] = useState<Connection[]>([]);
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     const updateDimensions = () => {
//       setDimensions({
//         width: window.innerWidth,
//         height: Math.min(window.innerHeight * 0.4, 400)
//       });
//     };

//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);
//     return () => window.removeEventListener('resize', updateDimensions);
//   }, []);

//   useEffect(() => {
//     if (dimensions.width === 0 || dimensions.height === 0) return;

//     // Generate nodes
//     const nodeCount = Math.floor(dimensions.width / 50);
//     const newNodes: Node[] = Array.from({ length: nodeCount }, (_, i) => ({
//       id: i,
//       x: Math.random() * dimensions.width,
//       y: Math.random() * dimensions.height,
//       size: 6 + Math.random() * 6
//     }));

//     // Generate connections (approximately 2-3 per node)
//     const newConnections: Connection[] = [];
//     for (let i = 0; i < nodeCount; i++) {
//       const connectionCount = 2 + Math.floor(Math.random() * 2);
//       for (let j = 0; j < connectionCount; j++) {
//         const target = nodeCount > 1 ? Math.floor(Math.random() * (nodeCount - 1)) : 0;
//         if (target !== i) {
//           newConnections.push({ from: i, to: target });
//         }
//       }
//     }

//     setNodes(newNodes);
//     setConnections(newConnections);
//   }, [dimensions]);

//   return (
//     <div className="relative w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white">
//       <svg
//         width={dimensions.width}
//         height={dimensions.height}
//         className="w-full"
//         viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
//       >
//         {/* Connections */}
//         {connections.map((conn, index) => {
//           const fromNode = nodes[conn.from];
//           const toNode = nodes[conn.to];
//           if (!fromNode || !toNode) return null;

//           return (
//             <motion.line
//               key={`conn-${index}`}
//               x1={fromNode.x}
//               y1={fromNode.y}
//               x2={toNode.x}
//               y2={toNode.y}
//               stroke="rgba(59, 130, 246, 0.3)"
//               strokeWidth="1"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: [0, 0.3, 0] }}
//               transition={{
//                 duration: 4 + Math.random() * 6,
//                 repeat: Infinity,
//                 repeatType: 'reverse',
//                 delay: Math.random() * 2
//               }}
//             />
//           );
//         })}

//         {/* Nodes */}
//         {nodes.map((node) => (
//           <motion.circle
//             key={`node-${node.id}`}
//             cx={node.x}
//             cy={node.y}
//             r={node.size}
//             fill="rgba(59, 130, 246, 0.6)"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{
//               opacity: [0.4, 0.8, 0],
//               scale: [0.8, 1.2, 0.8]
//             }}
//             transition={{
//               duration: 6 + Math.random() * 4,
//               repeat: Infinity,
//               repeatType: 'reverse',
//               delay: Math.random() * 2
//             }}
//           />
//         ))}
//       </svg>

//       {/* Overlay gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none" />
//     </div>
//   );
// }















"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * @typedef {Object} Node
 * @property {number} id
 * @property {number} x
 * @property {number} y
 * @property {number} size
 */

/**
 * @typedef {Object} Connection
 * @property {number} from
 * @property {number} to
 */

export default function BlockchainAnimation() {
  /** @type {[Node[], Function]} */
  const [nodes, setNodes] = useState([]);
  
  /** @type {[Connection[], Function]} */
  const [connections, setConnections] = useState([]);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: Math.min(window.innerHeight * 0.4, 400)
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const nodeCount = Math.floor(dimensions.width / 50);
    const newNodes = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: 6 + Math.random() * 6
    }));

    const newConnections = [];
    for (let i = 0; i < nodeCount; i++) {
      const connectionCount = 2 + Math.floor(Math.random() * 2);
      for (let j = 0; j < connectionCount; j++) {
        const target = nodeCount > 1 ? Math.floor(Math.random() * (nodeCount - 1)) : 0;
        if (target !== i) {
          newConnections.push({ from: i, to: target });
        }
      }
    }

    setNodes(newNodes);
    setConnections(newConnections);
  }, [dimensions]);

  return (
    <div className="absolute left-0 top-0 w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white ">
      <svg
        width={dimensions.width}
        height={dimensions.height}
        className="w-full"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      >
        {/* Connections */}
        {connections.map((conn, index) => {
          const fromNode = nodes[conn.from];
          const toNode = nodes[conn.to];
          if (!fromNode || !toNode) return null;

          return (
            <motion.line
              key={`conn-${index}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 4 + Math.random() * 6,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: Math.random() * 2
              }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={`node-${node.id}`}
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill="rgba(59, 130, 246, 0.6)"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.4, 0.8, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: Math.random() * 2
            }}
          />
        ))}
      </svg>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </div>
  );
}

