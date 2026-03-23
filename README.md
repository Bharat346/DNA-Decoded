# 🧬 DNA-Based Disease Prediction System

---

## 📌 Project Overview

The **DNA-Based Disease Prediction System** is a machine learning-based bioinformatics project that analyzes genomic variations such as **Single Nucleotide Polymorphisms (SNPs)** to predict disease risk in individuals.

The system integrates:
- 🧪 **GWAS (Genome-Wide Association Study) dataset**
- 👤 **Patient genomic data (SNP + genotype information)**
- 🤖 **Machine Learning models**

It computes a **Polygenic Risk Score (PRS)** and classifies individuals into:
- 🟢 Low Risk  
- 🟡 Medium Risk  
- 🔴 High Risk  

This project combines **bioinformatics + machine learning + data science** to support early disease detection and precision medicine.

---

## 🎯 Objectives

The main objectives of this project are:

- 🔬 To analyze genetic variations (SNPs) from DNA data  
- 🧬 To map SNPs with disease associations using GWAS dataset  
- 📊 To compute Polygenic Risk Score (PRS) for individuals  
- 🤖 To train ML models for disease risk classification  
- 🧠 To compare multiple ML algorithms for best performance  
- 📈 To visualize genetic risk patterns and model performance  
- 🧪 To support research in personalized medicine  

---

## 🧪 Dataset Description

### 1. GWAS Dataset
Contains genetic association data:
- SNP ID (rsID)
- Disease / Trait
- Risk Allele
- Effect Size (Beta)
- Chromosome information

### 2. Patient Dataset
Contains individual-level genetic data:
- rsID
- Chromosome number
- Position (POS)
- Genotype (AA, AG, GG etc.)
- Derived PRS values

---

## ⚙️ Workflow of the System

The project follows a structured pipeline:

### 🔹 Step 1: Data Collection
- Load GWAS dataset (SNP-disease mapping)
- Load patient genomic dataset

---

### 🔹 Step 2: Data Preprocessing
- Remove missing SNP values  
- Standardize SNP formats  
- Extract risk alleles  
- Clean chromosome values (X → 23, Y → 24, MT → 25)  
- Encode genotype values (0 / 1 / 2 representation)  

---

### 🔹 Step 3: SNP-Disease Mapping
- Create mapping:
  - SNP → Beta score  
  - SNP → Disease association  
- Merge GWAS knowledge into patient dataset  

---

### 🔹 Step 4: Polygenic Risk Score (PRS) Calculation

For each SNP:

\[
PRS = (Number\ of\ risk\ alleles\ in\ genotype) \times \beta
\]

Final PRS is sum of all SNP contributions.

---

### 🔹 Step 5: Feature Engineering
Final model features:
- rsID (encoded)
- Chromosome
- Position (POS)
- Genotype (encoded)
- Beta score

---

### 🔹 Step 6: Model Training
Dataset is split into:
- Training: 60%
- Validation: 20%
- Testing: 20%

---

## 🤖 Machine Learning Algorithms

### 1. 🌲 Random Forest Classifier
- Ensemble of decision trees
- Uses majority voting
- Handles high-dimensional genomic data well
- Reduces overfitting

---

### 2. 📈 Gradient Boosting Classifier
- Sequential learning method
- Each model corrects previous errors
- Optimizes loss function
- High accuracy in structured data

---

### 3. ⚡ Support Vector Machine (SVM)
- Finds optimal hyperplane for classification
- Works well in high-dimensional space
- Uses kernel trick for non-linear separation
- Effective for PRS classification

---

### 4. 📊 Logistic Regression
- Probabilistic classification model
- Uses sigmoid function
- Provides interpretable outputs
- Works well for baseline comparison

---

## 📊 Model Evaluation

Models are evaluated using:

- Accuracy  
- Precision  
- Recall  
- F1-Score  
- RMSE  
- Confusion Matrix  

---

## 📈 Results

- 🌟 Gradient Boosting: ~93% accuracy  
- 🌟 Random Forest: ~92% accuracy  
- ⚖️ SVM & Logistic Regression: moderate performance  

The system successfully classifies individuals into:
- Low Risk  
- Medium Risk  
- High Risk  

---

## 🧬 Key Functional Components

### 🔬 1. PRS Calculation Engine
Computes genetic risk based on SNP effect sizes.

---

### 🧠 2. SNP Prediction Module
Predicts disease risk category for new genetic input.

---

### 📊 3. Beta Score Analysis
- Distribution of SNP effect sizes  
- Identification of high-impact SNPs  

---

### 🧪 4. Disease Association Analysis
- Maps SNPs to diseases  
- Identifies top diseases by SNP count  

---

### 👤 5. Patient Genetic Profiling
- Risk categorization per individual  
- Identification of high-risk SNPs  

---

## 📉 Visualization Outputs

- Confusion Matrix heatmaps  
- Beta score distribution graph  
- Feature importance (Random Forest)  
- Disease association bar plots  

---

## 🔮 Future Scope

- 🧠 Deep Learning (Neural Networks for genomic prediction)  
- 🌐 Web-based UI dashboard for real-time analysis  
- 📂 VCF file upload support  
- 🧬 Multi-population genetic analysis  
- 🏥 Clinical integration with medical records  
- 🤖 AI-driven disease recommendation system  

---

## 📚 References

- GWAS Catalog: https://www.ebi.ac.uk/gwas/  
- 1000 Genomes Project: https://www.internationalgenome.org/  
- Scikit-learn Documentation: https://scikit-learn.org/  
- IEEE Research Papers on Genomic ML Models  

---

## 👨‍💻 Author

**Software Developer | Student | Research Enthusiast**  
Passionate about **Bioinformatics, Machine Learning, and AI in Healthcare**

---

## ⭐ Project Summary

This project demonstrates how **machine learning and genomics can be combined** to predict disease risk from DNA data, enabling early diagnosis and personalized healthcare insights.
