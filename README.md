# HERV Primer Database (DNAtabase Frontend)

A web interface for exploring curated Human Endogenous Retrovirus (HERV) PCR primer sets, genomic targets, and sequence-based relationships mapped against GRCh38.

The system exposes a structured API (FastAPI backend) and a React-based frontend for interactive querying, visualization, and primer resolution.

---

## Overview

Human endogenous retroviruses (HERVs) make up ~10% of the human genome, but are difficult to study due to inconsistent annotation and assay design.

This platform provides:

- Curated primer sets (>500 pairs)
- Forward ↔ reverse sequence resolution
- HERV family / subgroup / component search
- Genomic locus mapping
- Reference-linked primer assays

---

## Key Features

- Primer set search (family, subgroup, component)
- Exact sequence lookup (forward ↔ reverse)
- Genomic locus annotation
- Dataset statistics
- Literature-linked primer evidence
- FastAPI backend with JSON API

---

## Frontend

React-based interface with:

- Structured search UI
- Primer set visualization cards
- Reference-linked outputs
- Sequence lookup tools

---

## API Backend

### Base URL
http://10.62.55.108:8001

### Swagger UI
http://10.62.55.108:8001/docs

### OpenAPI Schema
http://10.62.55.108:8001/openapi.json

---

## API Endpoints

### Primer set search

GET /primers?family=HERV-K

GET /primers?family=HERV-K&component=env

---

### Forward → Reverse lookup

GET /primers_forward?forward_seq=AGCAGGTCAGGTGCCTGTAACATT

Returns reverse primers and linked references.

---

### Reverse → Forward lookup

GET /primers_reverse?reverse_seq=GCAGCCCTATTTCTTCGGACC

Returns forward primers and associated annotations.

---

### Dataset statistics

GET /primer_stats

---

## Example Workflow

1. Search primer sets by HERV family  
2. Select subgroup (e.g. HML-2)  
3. Inspect forward/reverse primers  
4. Resolve exact sequence relationships  
5. Explore supporting literature  

---

## Scientific Context

This resource was developed to address long-standing methodological and conceptual challenges in Human Endogenous Retrovirus (HERV) research.

HERVs comprise approximately 10% of the human genome, yet their detection, annotation, and interpretation remain highly heterogeneous across studies. Differences in nomenclature, fragmented genomic structure, polymorphism, and a lack of standardised analysis pipelines have resulted in limited comparability between experimental findings.

In a systematic review of the HERV literature, we curated over 500 primer pairs spanning more than 15 HERV groups and systematically mapped their binding sites against the GRCh38 reference genome. This revealed substantial biases in experimental design, particularly toward HERV-K/HML-2, and widespread multi-mapping, with a majority of primers aligning to multiple genomic loci.

Importantly, we observed that many experimental studies implicitly define a HERV by the use of a specific PCR primer pair, even when this operational definition is not explicitly stated. While most primers overlap annotated HERV regions, their combined genomic coverage represents only a small fraction of known loci, suggesting that negative experimental findings may reflect limited assay coverage rather than true absence of expression.

These observations highlight the need for locus-resolved, reproducible, and standardized approaches to HERV analysis. Future work is expected to benefit from long-read sequencing, phased assemblies, and graph-based pangenome representations, enabling allele-aware and locus-specific interpretation of retroviral elements.

---

## Citation

A formal publication describing this resource is forthcoming.

**Preprint title:**  
*Standardising human endogenous retrovirus analyses: Challenges and a primer-assay database*

**Authors:**  
João P. C. R. de Mendonça, Emilie Sofie Engdal, Mauricio Moldes, Kristoffer Staal Rohrberg, Peter Johannes Holst, Frederik Otzen Bagger

---

## Institution

MDxCore  
Department of Genomic Medicine  
Rigshospitalet, Copenhagen, Denmark

---

## License

This project is licensed under the MIT License.
