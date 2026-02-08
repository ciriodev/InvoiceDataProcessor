# 📑 JS Invoice Data Processor

A lightweight JavaScript tool designed to parse raw text files, extract pricing data, and calculate totals including taxes (VAT).

## 💡 The Problem
Small businesses often have raw text logs or simple lists of services but need a quick way to calculate final invoices without complex software.

## 🛠️ Features
* **File API Integration:** Reads local `.txt` files directly in the browser.
* **String Parsing:** Uses advanced string manipulation (`split`) to separate product names from numeric values.
* **Financial Logic:** Automatically applies a 21% VAT (IVA) rate and formats the output to 2 decimal places.
* **Real-time Feedback:** Instant UI updates using DOM manipulation.

## 🚀 Technical Specs
* **Vanilla JavaScript:** No frameworks, just pure, high-performance JS.
* **Asynchronous Loading:** Uses `FileReader` to handle files without freezing the browser.

## 📖 Usage
1. Upload a `.txt` file with the format `Product: Price`.
2. The script will automatically sum all items.
3. The total including VAT will be displayed instantly on the screen.

---
*Part of the "1 Million Goal" Challenge - Focusing on automation and efficiency.*
