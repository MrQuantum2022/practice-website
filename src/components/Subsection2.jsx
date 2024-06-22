import {React,useState} from "react";
import Cards from "./Cards";
import Popcard from "./Popcard";

export default function Subsection2() {
  const [toggle,settogl] = useState(false);
  const [headp,setheadp] = useState("")
  const [contp,setcontp] = useState("");

  let headings = [
    "Model-based Optimization of Superconducting Qubit Readout",
    "Optimizing quantum gates towards the scale of logical qubits",
    "Drug Design on Quantum Computers",
    "Analyzing Prospects for Quantum Advantage in Topological Data Analysis",
    "Quantum Computation of Stopping power for Inertial Fusion Target Design",
    "Dynamics of magnetization at infinite temperature in a Heisenberg spin chain",
  ];
  let content = [
    "Measurement is one of the essential components of quantum algorithms, and for superconducting qubits it is often the most error prone. Here, we demonstrate a model-based readout optimization achieving low measurement errors while avoiding detrimental side-effects.",
    "A foundational assumption of quantum error correction theory is that quantum gates can be scaled to large processors without exceeding the error-threshold for fault tolerance. Two major challenges that could become fundamental roadblocks are manufacturing...",
    "The promised industrial applications of quantum computers often rest on their anticipated ability to perform accurate, efficient quantum chemical calculations. ",
    "Lloyd et al. were first to demonstrate the promise of quantum algorithms for computing Betti numbers in persistent homology (a way of characterizing topological features of data sets). Here, we propose, analyze, and optimize an improved quantum algorithm for topological data analysis (TDA) ...",
    "Stopping power is the rate at which a material absorbs the kinetic energy of a charged particle passing through it - one of many properties needed over a wide range of thermodynamic conditions in modeling inertial fusion implosions. ",
    "Understanding universal aspects of quantum dynamics is an unresolved problem in statistical mechanics. In particular, the spin dynamics of the one-dimensional Heisenberg model were conjectured as to belong to the Kardar-Parisi-Zhang (KPZ) universality class based on the scaling of the infinite-temperature spin-spin correlation function. "
  ];
  let Elcontent=["Measurement is one of the essential components of quantum algorithms, and for superconducting qubits it is often the most error prone. Here, we demonstrate a model-based readout optimization achieving low measurement errors while avoiding detrimental side-effects. For simultaneous and mid-circuit measurements across 17 qubits we observe 1.5% error per qubit with a duration of 500 ns end-to-end and minimal excess reset error from residual resonator photons. We also suppress measurement-induced state transitions and achieve a qubit leakage rate limited by natural heating.This technique can scale to hundreds of qubits, and be used to enhance performance of error-correcting codes as well as near-term applications.",
    "A foundational assumption of quantum error correction theory is that quantum gates can be scaled to large processors without exceeding the error-threshold for fault tolerance. Two major challenges that could become fundamental roadblocks are manufacturing high-performance quantum hardware and engineering a control system that can reach its performance limits. The control challenge of scaling quantum gates from small to large processors without degrading performance often maps to non-convex, high-constraint, and time-dynamic control optimization over an exponentially expanding configuration space. Here we report on a control optimization strategy that can scalably overcome the complexity of such problems. We demonstrate it by choreographing the frequency trajectories of 68 frequency-tunable superconducting qubits to execute single- and two-qubit gates while mitigating computational errors. When combined with a comprehensive model of physical errors across our processor, the strategy suppresses physical error rates by ~3.7× compared with the case of no optimization.",
    "The promised industrial applications of quantum computers often rest on their anticipated ability to perform accurate, efficient quantum chemical calculations. Computational drug discovery relies on accurate predictions of how candidate drugs interact with their targets in a cellular environment involving several thousands of atoms at finite temperatures. Although quantum computers are still far from being used as daily tools in the pharmaceutical industry, here we explore the challenges and opportunities of applying quantum computers to drug design. We discuss where these could transform industrial research and identify the substantial further developments needed to reach this goal.",
    "Lloyd et al. were first to demonstrate the promise of quantum algorithms for computing Betti numbers in persistent homology (a way of characterizing topological features of data sets). Here, we propose, analyze, and optimize an improved quantum algorithm for topological data analysis (TDA) with reduced scaling, including a method for preparing Dicke states based on inequality testing, a more efficient amplitude estimation algorithm using Kaiser windows, and an optimal implementation of eigenvalue projectors based on Chebyshev polynomials. We compile our approach to a fault-tolerant gate set and estimate constant factors in the Toffoli complexity. Our analysis reveals that super-quadratic quantum speedups are only possible for this problem when targeting a multiplicative error approximation and the Betti number grows asymptotically. Further, we propose a dequantization of the quantum TDA algorithm that shows that having exponentially large dimension and Betti number are necessary, but insufficient conditions, for super-polynomial advantage. We then introduce and analyze specific problem examples for which super-polynomial advantages may be achieved, and argue that quantum circuits with tens of billions of Toffoli gates can solve some seemingly classically intractable instances.",
    "Stopping power is the rate at which a material absorbs the kinetic energy of a charged particle passing through it - one of many properties needed over a wide range of thermodynamic conditions in modeling inertial fusion implosions. First-principles stopping calculations are classically challenging because they involve the dynamics of large electronic systems far from equilibrium, with accuracies that are particularly difficult to constrain and assess in the warm-dense conditions preceding ignition. Here, we describe a protocol for using a fault-tolerant quantum computer to calculate stopping power from a first-quantized representation of the electrons and projectile.[PRX Quantum 2, 040332 2021], adapting and optimizing those algorithms to estimate observables of interest from the non-Born-Oppenheimer dynamics of multiple particle species at finite temperature. We also work out the constant factors associated with a novel implementation of a high order Trotter approach to simulating a grid representation of these systems. Ultimately, we report logical qubit requirements and leading-order Toffoli costs for computing the stopping power of various projectile/target combinations relevant to interpreting and designing inertial fusion experiments. We estimate that stopping power calculations can be quantum simulated with roughly the same number of logical qubits and about one hundred times more Toffoli gates than is required for state-of-the-art quantum simulations of industrially relevant molecules such as FeMoCo or P450.",
    "Understanding universal aspects of quantum dynamics is an unresolved problem in statistical mechanics. In particular, the spin dynamics of the one-dimensional Heisenberg model were conjectured as to belong to the Kardar-Parisi-Zhang (KPZ) universality class based on the scaling of the infinite-temperature spin-spin correlation function. In a chain of 46 superconducting qubits, we studied the probability distribution of the magnetization transferred across the chain’s center, P(M). The first two moments of P(M) show superdiffusive behavior, a hallmark of KPZ universality. However, the third and fourth moments ruled out the KPZ conjecture and allow for evaluating other theories. Our results highlight the importance of studying higher moments in determining dynamic universality classes and provide insights into universal behavior in quantum systems."
  ]
  let cardno=[0,1,2,3,4,5]
  return (
    <div className=" bg-slate-100">
      <div className=" text-3xl text-center  py-5 flex font-medium mx-5 justify-center md:justify-start ">
        <h1 className="border-b-2 border-green-900 p-3">Recent publications</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {cardno.map(num=><Cards key={num} heads={headings[num]} content={content[num]} elcontent={Elcontent[num]} settogl={settogl} setheadp={setheadp} setcontp ={setcontp}/>)}
        
      </div>
      <Popcard showpop={toggle} head={headp} content={contp} setshow={settogl} />
    </div>
  );
}