#!/bin/bash

#SBATCH --account=PAS1063
#SBATCH --job-name=PearFiles
#SBATCH --time=01:00:00
#SBATCH --nodes=1
#SBATCH --ntasks=28

set -x 

cd /fs/project/PAS1063/Avalos_eDNA

ls *L001_R1_001.fastq | while read i
do
	a=`echo $i | cut -d'_' -f1-3`
	~/local/src/PEAR-master/src/pear -j 12 -y 28000M -f ${a}_R1_001.fastq -r ${a}_R2_001.fastq -o ${a} -t 150 -q 20 -n 150
	vsearch --fastq_filter ${a}.assembled.fastq -fastaout Assembled/${a}.asmbld.fasta
	vsearch --fastq_filter ${a}.unassembled.forward.fastq -fastaout Delete/${a}.asmbld.forw.fasta
	vsearch --fastq_filter ${a}.unassembled.reverse.fastq -fastaout Delete/${a}.asmbld.rev.fasta	
done

