#!/bin/bash

#SBATCH --account=PAS1063
#SBATCH --job-name=Align
#SBATCH --time=05:00:00
#SBATCH --nodes=1
#SBATCH --ntasks=28
#SBATCH --mem=48000mb

set -x 

#cd /fs/project/PAS1063/NPS_Flower_eDNA/eDNA
#
#ls *L001.asmbld.fasta | while read i 
#do
#	a=`echo $i | cut -d'_' -f1-2`
#	vsearch --usearch_global ${i} --db /fs/project/PAS1063/YvanSpiderProject/COI_Genus_noHS.fa --id 0.70 --maxaccepts 100 --maxrejects 50 --maxhits 1 --gapopen 0TE --gapext 0TE --userout Alignments/${a}.vsrch70pi.txt --userfields query+target+id+alnlen+mism+opens+qlo+qhi+tlo+thi+evalue+bits+qcov --query_cov 0.8 --threads 28
#done

cd /fs/project/PAS1063/NPS_Flower_eDNA/NPS

ls *L001.asmbld.fasta | while read i
do
        a=`echo $i | cut -d'_' -f1-2`
        vsearch --usearch_global ${i} --db /fs/project/PAS1063/YvanSpiderProject/COI_Genus_noHS.fa --id 0.70 --maxaccepts 100 --maxrejects 50 --maxhits 1 --gapopen 0TE --gapext 0TE --userout Alignments/${a}.vsrch70pi.txt --userfields query+target+id+alnlen+mism+opens+qlo+qhi+tlo+thi+evalue+bits+qcov --query_cov 0.8 --threads 28
done
