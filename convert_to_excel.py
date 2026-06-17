import pandas as pd

try:
    df = pd.read_csv('CRITICAL_FLOWS.csv')
    df.to_excel('CRITICAL_FLOWS.xlsx', index=False)
    print("Excel file generated: CRITICAL_FLOWS.xlsx")
except Exception as e:
    print(f"Error: {e}")
