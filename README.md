<img width="1632" height="400" alt="banner" src="https://github.com/user-attachments/assets/c3178a76-52f5-4c98-bbfa-888ad98bc197" />

# 🎯 Painel de Controle de Fine-Tuning YOLO

> Uma interface intuitiva para configuração, execução e análise do ciclo de vida de treinamento de modelos YOLO.

## 📖 Sobre o Projeto

Este projeto é um **Painel de Controle de Fine-Tuning**, desenvolvido para abstrair a complexidade do código subjacente no treinamento de modelos de visão computacional.

O objetivo principal é permitir que o usuário treine um modelo capaz de reconhecer **classes personalizadas** que não fazem parte do dataset padrão, facilitando o processo desde a ingestão dos dados até a validação visual.

<img width="2752" height="1536" alt="infografico" src="https://github.com/user-attachments/assets/b44ffff4-6fec-4e0e-b295-58e5dc213ffe" />


## 👥 Público-Alvo

Ferramenta ideal para:
* Estudantes
* Pesquisadores
* Engenheiros de Machine Learning

## ⚙️ Módulos do Sistema

O sistema gerencia o fluxo de trabalho através de quatro módulos principais:

### 1. 📂 Gestão de Dados
Responsável pela preparação do dataset.
* **Ingestão e Validação:** Importação de datasets brutos.
* **Split de Dados:** Configuração da divisão entre conjuntos de treinamento e teste (ex: `80/20`).

### 2. 🛠️ Configuração
Permite o ajuste fino das variáveis de treinamento para influenciar o *trade-off* entre latência e acurácia.
* **Arquitetura:** Seleção da versão do YOLO (ex: `YOLOv8`, `YOLOv10`).
* **Tamanho do Modelo:** Escolha da escala, desde *Nano* até *Extra Large*.
* **Hiperparâmetros:** Definição de Épocas (*Epochs*) e Tamanho do Lote (*Batch Size*).
* **Hardware:** Seleção do processador de execução (`CPU` ou `GPU`).

### 3. 🚀 Execução
O motor de processamento do painel.
* Dispara o pipeline de treinamento com as configurações definidas.
* Salva automaticamente o arquivo de pesos ajustados (`best.pt`) ao finalizar.

### 4. 📊 Análise e Inferência
Ferramentas para validar a eficácia do modelo treinado.
* **Métricas de Desempenho:** Cálculo e exibição de mAP (*mean Average Precision*), Precisão e Revocação.
* **Validação Visual:** Ferramentas que exibem as *Bounding Boxes* e o Nível de Confiança sobre imagens de teste.

---
