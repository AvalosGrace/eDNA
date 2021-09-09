#!/bin/bash

#SBATCH --account=PAS1063
#SBATCH --job-name=PearFiles
#SBATCH --time=05:00:00
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --mem=4000mb

set -x 

cd /fs/project/PAS1063/NPS_Flower_eDNA/eDNA


ls *L001.asmbld.fasta | while read i
do
	a=`echo $i | cut -d'_' -f1-2`
	vsearch  --derep_fulllength $i --strand plus --output ./OTU_Analysis/${a}.derep.fasta --sizeout --relabel ${a}. --fasta_width 0
	vsearch --cluster_unoise ./OTU_Analysis/${a}.derep.fasta --sizein --sizeout --centroids ./OTU_Analysis/${a}.denoised.fasta --minsize 1 
	vsearch --uchime3_denovo ./OTU_Analysis/${a}.denoised.fasta --sizein --sizeout --nonchimeras ./OTU_Analysis/${a}.DenoiseNonChime.fasta
	vsearch --cluster_size ./OTU_Analysis/${a}.DenoiseNonChime.fasta --threads 1 --id 0.98 --strand plus --sizein --sizeout --fasta_width 0 --centroids ./OTU_Analysis/${a}.98otus.fasta
done
