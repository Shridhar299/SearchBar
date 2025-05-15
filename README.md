#### Aim :
Develop a user-friendly search bar that allows users to search for countries by name or capital. The challenge focuses on creating efficient search functionality with an attractive and intuitive user interface.Allow users to input text to search for data/ countries by name or capital. • Display search suggestions or autocomplete options as the user types.

### Deployed link
https://shridhar-searchbar.netlify.app/





Hello,

Thank you for applying to join our team at GoQuant. After a thorough review of your application, we are pleased to inform you that you have been selected to move forward in our recruitment process.

As the next step, we ask you to complete the following assignment. This will provide us with a deeper understanding of your skills and how well they align with the role you have applied for. Please ensure that you submit your completed work within 7 days from today.

To summarise, the assignment is described below:

Objective
Create a high-performance trade simulator leveraging real-time market data to estimate transaction costs and market impact. This system will connect to provided WebSocket endpoints that stream full L2 orderbook data for cryptocurrency exchanges.

Important: You will need to use a VPN to access OKX for this assignment. Since the market data you need is public, there is no requirement to create an account.

Initial Setup
1. Review the API documentation for OKX SPOT exchange
2. Set up a development environment for either Python or C++ (your choice)

Core Requirements:
UI Components
1. Implement a user interface with:
   - Left panel: Input parameters section
   - Right panel: Processed output values section

Input Parameters
1. Exchange (OKX)
2. Spot Asset (Any available on the selected exchange)
3. Order Type (market)
4. Quantity (~100 USD equivalent)
5. Volatility (market parameter -- see exchanges' docs)
7. Fee Tier (based on exchange documentation)

Output Parameters
1. Expected Slippage (using linear or quantile regression modelling)
2. Expected Fees (rule-based fee model)
3. Expected Market Impact (Almgren-Chriss model)
   - Candidates can refer to: https://www.linkedin.com/pulse/understanding-almgren-chriss-model-optimal-portfolio-execution-pal-pmeqc/
4. Net Cost (Slippage + Fees + Market Impact)
5. Maker/Taker proportion (logistic regression)
6. Internal Latency (measured as processing time per tick)

WebSocket Implementation
1. Connect to provided WebSocket endpoint:
   - wss://ws.gomarket-cpp.goquant.io/ws/l2-orderbook/okx/BTC-USDT-SWAP
2. Sample response format:
   {
     "timestamp": "2025-05-04T10:39:13Z",
     "exchange": "OKX",
     "symbol": "BTC-USDT-SWAP",
     "asks": [
       ["95445.5", "9.06"],
       ["95448", "2.05"],
       // ... more ask levels ...
     ],
     "bids": [
       ["95445.4", "1104.23"],
       ["95445.3", "0.02"],
       // ... more bid levels ...
     ]
   }
3. Process L2 orderbook data in real-time
4. Update output parameters with each new tick

Technical Requirements
1. Implementation in either Python or C++ (your choice)
2. System must process data faster than the stream is received
3. Include proper error handling and logging
4. Implement clean, maintainable code architecture
5. Provide documentation for models and algorithms used

Bonus Section (recommended): Performance Analysis and Optimization
Latency Benchmarking
1. Measure and document the following metrics:
   - Data processing latency
   - UI update latency
   - End-to-end simulation loop latency

Optimization Requirements
1. Implement and justify optimization techniques for:
   - Memory management
   - Network communication
   - Data structure selection
   - Thread management
   - Regression model efficiency

Model Implementation
1. Detailed implementation of:
   - Almgren-Chriss market impact model
   - Regression models for slippage estimation
   - Maker/Taker proportion prediction

Documentation Requirements
1. Detailed explanation of:
   - Model selection and parameters
   - Regression techniques chosen
   - Market impact calculation methodology
   - Performance optimization approaches

Deliverables
1. Complete source code with documentation
2. Video recording demonstrating:
   - System functionality
   - Code review
   - Implementation explanation
3. If completing bonus section:
   - Performance analysis report
   - Benchmarking results
   - Optimization documentation