#!/bin/bash

#SBATCH --account=PAS1063
#SBATCH --job-name=PearFiles
#SBATCH --time=05:00:00
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --mem=4000mb

set -x 

#cd /fs/project/PAS1063/NPS_Flower_eDNA/eDNA/Alignments/MtxaFrmted
#
#ls *.mtxa2.tax | while read i
#do
#	a=`echo $i | cut -d'.' -f1`
#	python ../../../4_TrimMtxa2IDs.py $i Classified/${a}.Trmd.txt
#done

cd /fs/project/PAS1063/NPS_Flower_eDNA/NPS/Alignments/MtxaFrmted

ls *.mtxa2.tax | while read i
do
        a=`echo $i | cut -d'.' -f1`
        python ../../../4_TrimMtxa2IDs.py $i Classified/${a}.Trmd.txt
done

